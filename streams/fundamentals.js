// process.stdin
//   .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream';

class OneToHundredStream extends Readable {
  index =  1
  _read() {
    const i = this.index ++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buffer = Buffer.from(String(i))
        this.push(buffer)
      }
    }, 500)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1
    callback(null, Buffer.from(String(transformed)))
  }
}

class MultitplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)

    callback()
  }
}

// Stream de Leitura a gente só consegue ler
new OneToHundredStream()
  // Stream de Transformação ele obrigatoriamente deve ler e escrever dados
  .pipe(new InverseNumberStream())
  // Stream de Escrita, só escreve
  .pipe(new MultitplyByTenStream())
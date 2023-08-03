function divideColas(colores) {
    const colaPar = [];
    const colaNon = [];
  
    for (let i = 0; i < colores.length; i++) {
      if (i % 2 === 0) {
        colaPar.push(colores[i]);
      } else {
        colaNon.push(colores[i]);
      }
    }
  
    return [colaPar, colaNon];
  }
  
  const colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
  const colasDivididas = divideColas(colaOriginal);
  
  const colaPar = colasDivididas[0];
  const colaNon = colasDivididas[1];
  
  console.log("Cola 1:", colaPar); // [ amarillo, rojo, azul, morado]
  console.log("Cola 2:", colaNon); // [rosa, verde, negro, blanco]
  
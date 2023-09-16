function calcularPromedioNotas() {
    
    const numNotas = parseInt(prompt("Ingrese el número de notas a evaluar por estudiante:"));
  
    
    if (isNaN(numNotas) || numNotas <= 0) {
      alert("Por favor, ingrese un número válido de notas a evaluar.");
      return;
    }
  
    
    const numEstudiantes = parseInt(prompt("Ingrese el número de estudiantes:"));
  
    
    if (isNaN(numEstudiantes) || numEstudiantes <= 0) {
      alert("Por favor, ingrese un número válido de estudiantes.");
      return;
    }
  
    
    const promedios = [];
  
    
    for (let i = 1; i <= numEstudiantes; i++) {
      const notasEstudiante = [];
  
      
      for (let j = 1; j <= numNotas; j++) {
        const nota = parseFloat(prompt(`Ingrese la nota ${j} del estudiante ${i}:`));
  
        
        if (isNaN(nota) || nota < 0 || nota > 10) {
          alert("Por favor, ingrese una nota válida entre 0 y 10.");
          return;
        }
  
        notasEstudiante.push(nota); 
      }
  
      
      const promedioEstudiante = calcularPromedio(notasEstudiante);
      promedios.push(promedioEstudiante); 
    }
  
    
    for (let i = 0; i < numEstudiantes; i++) {
      alert(`El promedio del estudiante ${i + 1} es: ${promedios[i].toFixed(2)}`);
    }
  }
  
 
  function calcularPromedio(notas) {
    const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return sumaNotas / notas.length;
  }
  
  
  calcularPromedioNotas();
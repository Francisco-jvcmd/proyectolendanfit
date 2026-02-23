import { ExerciseData } from '@/types';

export const exerciseData: ExerciseData = {
  basic: {
    1: [
      {
        name: "Sentadilla Asistida con Silla",
        description: "Sentadilla controlada usando una silla como guia para aprender el patron de movimiento correcto.",
        duration: "8 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas y Gluteos",
        sets: 3,
        reps: "10 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "3s bajada / 1s pausa / 2s subida",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "Coloca una silla estable detras de ti. Pies separados al ancho de hombros, puntas ligeramente hacia afuera.", tip: "La silla es solo una guia de seguridad." },
          { step: 2, instruction: "Mira al frente, pecho arriba. Extiende los brazos al frente para equilibrio.", duration: "Posicion inicial" },
          { step: 3, instruction: "Flexiona caderas y rodillas lentamente como si fueras a sentarte. Baja durante 3 segundos.", duration: "3 segundos", tip: "Las rodillas no deben pasar la punta de los pies." },
          { step: 4, instruction: "Toca ligeramente la silla con los gluteos sin sentarte completamente. Pausa 1 segundo.", duration: "1 segundo" },
          { step: 5, instruction: "Empuja con los talones para volver a la posicion inicial durante 2 segundos. Aprieta gluteos arriba.", duration: "2 segundos" },
          { step: 6, instruction: "Repite el movimiento 10 veces. Descansa 60 segundos entre cada serie.", tip: "Si te cansas, sientate completamente y descansa." }
        ],
        benefits: ["Fortalece cuadriceps y gluteos", "Mejora el equilibrio", "Patron de movimiento fundamental"],
        commonMistakes: ["Dejar que las rodillas colapsen hacia adentro", "Inclinar el torso demasiado hacia adelante", "Subir demasiado rapido"]
      },
      {
        name: "Flexiones de Pared",
        description: "Version modificada de flexiones usando la pared como soporte, ideal para principiantes.",
        duration: "6 min",
        frequency: "3 veces por semana",
        muscleGroup: "Pecho, Hombros y Triceps",
        sets: 3,
        reps: "12 repeticiones",
        restBetweenSets: "45 segundos",
        tempoSeconds: "2s bajada / 1s pausa / 2s subida",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "Parate frente a una pared a un brazo de distancia. Pies juntos o separados al ancho de hombros.", tip: "La pared debe ser lisa y estable." },
          { step: 2, instruction: "Coloca las palmas en la pared a la altura de los hombros, un poco mas separadas que el ancho de hombros." },
          { step: 3, instruction: "Inclina tu cuerpo hacia la pared flexionando los codos lentamente durante 2 segundos.", duration: "2 segundos", tip: "Manten el cuerpo recto como una tabla." },
          { step: 4, instruction: "Cuando tu nariz casi toque la pared, pausa 1 segundo apretando el pecho.", duration: "1 segundo" },
          { step: 5, instruction: "Empuja la pared para volver a la posicion inicial durante 2 segundos. No bloquees los codos.", duration: "2 segundos" },
          { step: 6, instruction: "Repite 12 veces. Para mayor dificultad, alejate mas de la pared.", tip: "Respira: inhala al bajar, exhala al empujar." }
        ],
        benefits: ["Fortalece pecho y brazos sin impacto", "Ideal para comenzar con flexiones", "Mejora la postura"],
        commonMistakes: ["Arquear la espalda baja", "Mover solo los brazos sin involucrar el core", "Respirar de forma inconsistente"]
      },
      {
        name: "Plancha en Rodillas",
        description: "Ejercicio isometrico de core modificado para construir fuerza abdominal basica.",
        duration: "6 min",
        frequency: "4 veces por semana",
        muscleGroup: "Core y Abdominales",
        sets: 3,
        reps: "20 segundos mantenida",
        restBetweenSets: "45 segundos",
        tempoSeconds: "Mantener 20s estatico",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "Arrodillate en el suelo sobre una colchoneta. Coloca los antebrazos en el suelo con los codos bajo los hombros." },
          { step: 2, instruction: "Extiende el cuerpo formando una linea recta desde las rodillas hasta la cabeza.", tip: "No dejes que la cadera suba o baje." },
          { step: 3, instruction: "Aprieta el abdomen como si fueras a recibir un golpe suave en el estomago.", duration: "Activacion continua" },
          { step: 4, instruction: "Manten la posicion durante 20 segundos respirando de forma constante y controlada.", duration: "20 segundos", tip: "No contengas la respiracion." },
          { step: 5, instruction: "Baja lentamente las rodillas al suelo para descansar 45 segundos.", duration: "45 segundos descanso" },
          { step: 6, instruction: "Repite 3 veces. Cada semana intenta agregar 5 segundos mas a la mantenida." }
        ],
        benefits: ["Fortalece el core completo", "Mejora la estabilidad de la espalda baja", "Base para ejercicios mas avanzados"],
        commonMistakes: ["Dejar caer la cadera hacia el suelo", "Subir la cadera demasiado (posicion de montana)", "Contener la respiracion"]
      },
      {
        name: "Elevaciones de Pantorrilla",
        description: "Ejercicio simple y efectivo para fortalecer las pantorrillas y mejorar el equilibrio.",
        duration: "5 min",
        frequency: "Diario",
        muscleGroup: "Pantorrillas",
        sets: 3,
        reps: "15 repeticiones",
        restBetweenSets: "30 segundos",
        tempoSeconds: "2s subida / 2s pausa / 2s bajada",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "Parate con los pies al ancho de caderas. Puedes sostenerte de una silla o pared para equilibrio." },
          { step: 2, instruction: "Lentamente eleva los talones del suelo poniendote de puntillas durante 2 segundos.", duration: "2 segundos" },
          { step: 3, instruction: "Mantente en la posicion mas alta durante 2 segundos apretando las pantorrillas.", duration: "2 segundos", tip: "Imagina que quieres ser mas alto." },
          { step: 4, instruction: "Baja los talones lentamente al suelo durante 2 segundos de forma controlada.", duration: "2 segundos" },
          { step: 5, instruction: "Repite 15 veces. Descansa 30 segundos entre series." }
        ],
        benefits: ["Fortalece gemelos y soleo", "Mejora el equilibrio y estabilidad", "Previene lesiones de tobillo"],
        commonMistakes: ["Subir y bajar demasiado rapido", "No llegar al rango completo de movimiento", "Inclinarse hacia adelante"]
      },
      {
        name: "Marcha en el Lugar",
        description: "Cardio de bajo impacto que eleva el ritmo cardiaco de forma segura y controlada.",
        duration: "10 min",
        frequency: "5 veces por semana",
        muscleGroup: "Cardio - Cuerpo Completo",
        sets: 3,
        reps: "60 segundos de marcha",
        restBetweenSets: "30 segundos",
        tempoSeconds: "Ritmo constante de marcha",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "Parate erguido con los pies juntos y los brazos a los lados.", tip: "Pon musica a un ritmo moderado para motivarte." },
          { step: 2, instruction: "Comienza a levantar las rodillas alternadamente como si caminaras, elevandolas hasta la altura de la cadera." },
          { step: 3, instruction: "Balancea los brazos de forma natural opuestos a las piernas (brazo derecho con pierna izquierda).", tip: "Manten el core activado." },
          { step: 4, instruction: "Manten un ritmo constante durante 60 segundos. Respira de forma ritmica.", duration: "60 segundos" },
          { step: 5, instruction: "Descansa 30 segundos caminando suavemente. Repite 3 veces.", duration: "30 segundos descanso" }
        ],
        benefits: ["Eleva frecuencia cardiaca de forma segura", "Quema calorias sin impacto articular", "Mejora la coordinacion"],
        commonMistakes: ["No levantar las rodillas suficientemente", "Olvidar el movimiento de brazos", "Inclinarse hacia atras"]
      }
    ],
    2: [
      {
        name: "Sentadilla sin Silla",
        description: "Progresion natural de la sentadilla asistida, ahora sin apoyo externo.",
        duration: "8 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas y Gluteos",
        sets: 3,
        reps: "12 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "3s bajada / 1s pausa / 2s subida",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "Pies al ancho de hombros, puntas ligeramente hacia afuera. Brazos extendidos al frente." },
          { step: 2, instruction: "Baja lentamente en 3 segundos manteniendo el pecho arriba y la espalda recta.", duration: "3 segundos" },
          { step: 3, instruction: "Baja hasta que los muslos esten paralelos al suelo o lo mas cerca posible.", tip: "No fuerces si sientes dolor." },
          { step: 4, instruction: "Pausa 1 segundo abajo, luego empuja con los talones para subir en 2 segundos.", duration: "2 segundos" },
          { step: 5, instruction: "12 reps x 3 series con 60 segundos de descanso entre series." }
        ],
        benefits: ["Mayor activacion muscular sin asistencia", "Mejora la movilidad de cadera", "Fortalece el core"],
        commonMistakes: ["Levantar los talones del suelo", "Redondear la espalda", "No bajar lo suficiente"]
      },
      {
        name: "Flexiones Inclinadas",
        description: "Flexiones con las manos en una superficie elevada como una mesa o banco.",
        duration: "7 min",
        frequency: "3 veces por semana",
        muscleGroup: "Pecho, Hombros y Triceps",
        sets: 3,
        reps: "10 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "2s bajada / 1s pausa / 2s subida",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "Coloca las manos en un banco, mesa baja o escalon estable. Manos al ancho de hombros." },
          { step: 2, instruction: "Extiende las piernas atras formando una linea recta con el cuerpo.", tip: "La superficie debe ser estable y no deslizarse." },
          { step: 3, instruction: "Baja el pecho hacia la superficie en 2 segundos flexionando los codos.", duration: "2 segundos" },
          { step: 4, instruction: "Pausa 1 segundo abajo, luego empuja para subir en 2 segundos.", duration: "2 segundos" },
          { step: 5, instruction: "10 reps x 3 series. Cada semana baja la altura de la superficie para progresar." }
        ],
        benefits: ["Transicion hacia flexiones en el suelo", "Mayor carga que flexiones de pared", "Fortalece estabilizadores"],
        commonMistakes: ["Abrir los codos a 90 grados", "No mantener el core activo", "Moverse demasiado rapido"]
      },
      {
        name: "Puente de Gluteos",
        description: "Ejercicio fundamental para activar y fortalecer los gluteos y la cadena posterior.",
        duration: "7 min",
        frequency: "4 veces por semana",
        muscleGroup: "Gluteos y Espalda Baja",
        sets: 3,
        reps: "12 repeticiones",
        restBetweenSets: "45 segundos",
        tempoSeconds: "2s subida / 3s pausa arriba / 2s bajada",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "Acuestate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo al ancho de caderas." },
          { step: 2, instruction: "Brazos a los lados con las palmas hacia abajo. Activa el abdomen.", tip: "Los pies deben estar lo suficientemente cerca para tocarlos con los dedos." },
          { step: 3, instruction: "Empuja con los talones y eleva las caderas hasta formar una linea recta de hombros a rodillas en 2 segundos.", duration: "2 segundos" },
          { step: 4, instruction: "Aprieta los gluteos fuertemente arriba y mantente 3 segundos.", duration: "3 segundos", tip: "Imagina que sostienes una moneda entre los gluteos." },
          { step: 5, instruction: "Baja lentamente en 2 segundos sin tocar completamente el suelo. Repite.", duration: "2 segundos" }
        ],
        benefits: ["Activa gluteos dormidos por estar sentado", "Alivia dolor de espalda baja", "Mejora la postura"],
        commonMistakes: ["Hiperextender la espalda baja arriba", "Empujar con la punta de los pies", "No apretar gluteos arriba"]
      },
      {
        name: "Bird Dog",
        description: "Ejercicio de estabilidad que fortalece el core mientras mejora la coordinacion.",
        duration: "6 min",
        frequency: "4 veces por semana",
        muscleGroup: "Core, Espalda y Gluteos",
        sets: 3,
        reps: "8 repeticiones por lado",
        restBetweenSets: "45 segundos",
        tempoSeconds: "2s extension / 3s mantenida / 2s retorno",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "En posicion de cuatro puntos: manos bajo los hombros, rodillas bajo las caderas." },
          { step: 2, instruction: "Activa el abdomen. Manten la espalda completamente plana como una mesa.", tip: "Coloca un libro en la espalda para verificar que esta plana." },
          { step: 3, instruction: "Extiende el brazo derecho al frente y la pierna izquierda atras simultaneamente en 2 segundos.", duration: "2 segundos" },
          { step: 4, instruction: "Mantente estirado formando una linea recta durante 3 segundos.", duration: "3 segundos" },
          { step: 5, instruction: "Regresa lentamente a la posicion inicial en 2 segundos. Repite con el otro lado.", duration: "2 segundos" },
          { step: 6, instruction: "8 repeticiones por cada lado = 1 serie. 3 series en total." }
        ],
        benefits: ["Mejora estabilidad del core", "Fortalece la espalda de forma segura", "Mejora coordinacion y equilibrio"],
        commonMistakes: ["Rotar las caderas al extender", "Elevar la extremidad demasiado alto", "Contener la respiracion"]
      }
    ],
    3: [
      {
        name: "Sentadilla Sumo",
        description: "Variacion con piernas mas separadas que trabaja los aductores y gluteos internos.",
        duration: "8 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas, Aductores y Gluteos",
        sets: 3,
        reps: "12 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "3s bajada / 2s pausa / 2s subida",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Pies mucho mas separados que el ancho de hombros, puntas apuntando hacia afuera a 45 grados." },
          { step: 2, instruction: "Manos juntas frente al pecho o en la cintura. Espalda recta, pecho arriba." },
          { step: 3, instruction: "Baja flexionando las rodillas hacia afuera siguiendo la direccion de los pies en 3 segundos.", duration: "3 segundos" },
          { step: 4, instruction: "Baja hasta que los muslos esten paralelos al suelo. Pausa 2 segundos.", duration: "2 segundos" },
          { step: 5, instruction: "Sube empujando con toda la planta del pie en 2 segundos. Aprieta gluteos arriba.", duration: "2 segundos" }
        ],
        benefits: ["Trabaja aductores (muslo interno)", "Mayor rango de movimiento", "Mejora la movilidad de cadera"],
        commonMistakes: ["Rodillas colapsando hacia adentro", "Inclinar el torso hacia adelante", "Pies no lo suficientemente abiertos"]
      },
      {
        name: "Plancha Completa",
        description: "Plancha estandar sobre los antebrazos con las piernas completamente extendidas.",
        duration: "6 min",
        frequency: "5 veces por semana",
        muscleGroup: "Core Completo",
        sets: 3,
        reps: "30 segundos mantenida",
        restBetweenSets: "45 segundos",
        tempoSeconds: "Mantener 30s estatico",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Coloca los antebrazos en el suelo con los codos directamente bajo los hombros." },
          { step: 2, instruction: "Extiende las piernas completamente, apoyandote en las puntas de los pies.", tip: "Pies separados al ancho de caderas para mas estabilidad." },
          { step: 3, instruction: "Forma una linea recta desde la cabeza hasta los talones. Activa abdomen y gluteos.", tip: "No mires hacia arriba, manten la cabeza neutral." },
          { step: 4, instruction: "Mantente durante 30 segundos respirando de forma ritmica y constante.", duration: "30 segundos" },
          { step: 5, instruction: "Baja las rodillas para descansar 45 segundos. Repite 3 veces." }
        ],
        benefits: ["Fortalece todo el core", "Mejora la resistencia muscular", "Estabiliza la columna vertebral"],
        commonMistakes: ["Cadera demasiado alta o baja", "Aguantar la respiracion", "Hombros subidos hacia las orejas"]
      },
      {
        name: "Zancadas Estacionarias",
        description: "Ejercicio unilateral que trabaja piernas, gluteos y mejora el equilibrio.",
        duration: "10 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas y Gluteos",
        sets: 3,
        reps: "10 repeticiones por pierna",
        restBetweenSets: "60 segundos",
        tempoSeconds: "2s bajada / 1s pausa / 2s subida",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "De pie, da un paso largo hacia adelante con el pie derecho. El pie izquierdo queda atras." },
          { step: 2, instruction: "Manos en la cintura o juntas frente al pecho. Torso erguido.", tip: "El paso debe ser lo suficientemente largo." },
          { step: 3, instruction: "Baja la rodilla trasera hacia el suelo en 2 segundos hasta casi tocarlo.", duration: "2 segundos" },
          { step: 4, instruction: "Ambas rodillas deben formar angulos de 90 grados. Pausa 1 segundo.", duration: "1 segundo" },
          { step: 5, instruction: "Empuja con el pie delantero para volver arriba en 2 segundos. 10 reps por pierna.", duration: "2 segundos" }
        ],
        benefits: ["Corrige desequilibrios musculares", "Fortalece cada pierna individualmente", "Mejora estabilidad y coordinacion"],
        commonMistakes: ["Rodilla delantera pasando la punta del pie", "Inclinarse hacia adelante", "Paso demasiado corto"]
      }
    ],
    4: [
      {
        name: "Sentadilla con Pulso",
        description: "Sentadilla con micro-movimientos abajo para aumentar el tiempo bajo tension.",
        duration: "8 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas y Gluteos",
        sets: 3,
        reps: "10 reps + 5 pulsos",
        restBetweenSets: "60 segundos",
        tempoSeconds: "3s bajada / 5 pulsos / 2s subida",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Posicion de sentadilla estandar: pies al ancho de hombros, puntas ligeramente afuera." },
          { step: 2, instruction: "Baja a la posicion mas baja de sentadilla en 3 segundos.", duration: "3 segundos" },
          { step: 3, instruction: "En la posicion baja, realiza 5 micro-movimientos (pulsos) subiendo y bajando 5-10 cm.", tip: "No subas completamente, manten la tension." },
          { step: 4, instruction: "Despues de los 5 pulsos, sube completamente en 2 segundos apretando gluteos.", duration: "2 segundos" },
          { step: 5, instruction: "10 repeticiones con pulsos x 3 series. Sentiras un ardor intenso, eso es normal." }
        ],
        benefits: ["Mayor tiempo bajo tension", "Fortalecimiento profundo", "Resistencia muscular superior"],
        commonMistakes: ["Pulsos demasiado amplios", "Perder la forma durante los pulsos", "No mantener el core activo"]
      },
      {
        name: "Superman",
        description: "Ejercicio en el suelo que fortalece toda la cadena posterior: espalda, gluteos y hombros.",
        duration: "7 min",
        frequency: "4 veces por semana",
        muscleGroup: "Espalda, Gluteos y Hombros",
        sets: 3,
        reps: "10 repeticiones",
        restBetweenSets: "45 segundos",
        tempoSeconds: "2s subida / 3s mantenida / 2s bajada",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Acuestate boca abajo con los brazos extendidos al frente y las piernas estiradas." },
          { step: 2, instruction: "Apoya la frente en el suelo. Activa el abdomen presionando el ombligo hacia la columna." },
          { step: 3, instruction: "Eleva simultaneamente los brazos, pecho y piernas del suelo en 2 segundos.", duration: "2 segundos", tip: "Imagina que vuelas como Superman." },
          { step: 4, instruction: "Mantente arriba durante 3 segundos apretando gluteos y espalda.", duration: "3 segundos" },
          { step: 5, instruction: "Baja todo lentamente en 2 segundos sin desplomarte. Repite 10 veces.", duration: "2 segundos" }
        ],
        benefits: ["Fortalece los erectores de la columna", "Previene dolor de espalda", "Mejora la postura"],
        commonMistakes: ["Elevar demasiado forzando el cuello", "No activar el abdomen", "Movimientos bruscos"]
      }
    ],
    5: [
      {
        name: "Sentadilla con Pausa Abajo",
        description: "Sentadilla con mantenida isometrica en la posicion baja para maxima activacion.",
        duration: "10 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas y Gluteos",
        sets: 4,
        reps: "10 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "3s bajada / 3s pausa / 2s subida",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Posicion de sentadilla. Pies al ancho de hombros." },
          { step: 2, instruction: "Baja en 3 segundos a la posicion mas profunda que puedas con buena forma.", duration: "3 segundos" },
          { step: 3, instruction: "Manten la posicion baja durante 3 segundos completos. Respira.", duration: "3 segundos", tip: "Esto elimina el impulso y requiere mas fuerza." },
          { step: 4, instruction: "Sube explosivamente en 2 segundos empujando con los talones.", duration: "2 segundos" },
          { step: 5, instruction: "4 series de 10 reps. Este ejercicio es muy efectivo para construir fuerza real." }
        ],
        benefits: ["Elimina impulso para fuerza pura", "Mayor activacion de fibras musculares", "Mejora movilidad profunda"],
        commonMistakes: ["Rebotar en la posicion baja", "No mantener los 3 segundos completos", "Perder tension en la pausa"]
      },
      {
        name: "Flexiones de Rodillas",
        description: "Flexiones completas pero con rodillas apoyadas para reducir la carga.",
        duration: "8 min",
        frequency: "3 veces por semana",
        muscleGroup: "Pecho, Hombros y Triceps",
        sets: 3,
        reps: "12 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "2s bajada / 1s pausa / 2s subida",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Posicion de plancha con las rodillas apoyadas. Manos un poco mas anchas que los hombros." },
          { step: 2, instruction: "Cruza los pies atras. Cuerpo recto desde rodillas hasta cabeza.", tip: "No dejes que la cadera baje." },
          { step: 3, instruction: "Baja el pecho al suelo en 2 segundos manteniendo los codos a 45 grados del cuerpo.", duration: "2 segundos" },
          { step: 4, instruction: "El pecho debe casi tocar el suelo. Pausa 1 segundo.", duration: "1 segundo" },
          { step: 5, instruction: "Empuja para subir en 2 segundos. No bloquees los codos arriba.", duration: "2 segundos" }
        ],
        benefits: ["Prepara para flexiones completas", "Fortalece pecho y triceps", "Menor carga articular que flexiones completas"],
        commonMistakes: ["Cadera muy alta o muy baja", "Codos demasiado abiertos", "Rango de movimiento incompleto"]
      }
    ],
    6: [
      {
        name: "Circuito Integral Basico",
        description: "Circuito combinando todos los ejercicios aprendidos en una rutina completa de cuerpo completo.",
        duration: "25 min",
        frequency: "4 veces por semana",
        muscleGroup: "Cuerpo Completo",
        sets: 3,
        reps: "45 segundos por ejercicio",
        restBetweenSets: "15 segundos entre ejercicios, 90s entre rondas",
        tempoSeconds: "Ritmo controlado continuo",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Calentamiento: 3 minutos de marcha en el lugar con movimientos de brazos.", duration: "3 minutos" },
          { step: 2, instruction: "Ejercicio 1: Sentadillas sin silla - 45 segundos de trabajo.", duration: "45 segundos" },
          { step: 3, instruction: "Descanso 15 segundos. Ejercicio 2: Flexiones inclinadas - 45 segundos.", duration: "45 segundos" },
          { step: 4, instruction: "Descanso 15 segundos. Ejercicio 3: Plancha completa - 45 segundos.", duration: "45 segundos" },
          { step: 5, instruction: "Descanso 15 segundos. Ejercicio 4: Puente de gluteos - 45 segundos.", duration: "45 segundos" },
          { step: 6, instruction: "Descanso 15 segundos. Ejercicio 5: Superman - 45 segundos. Descansa 90 segundos y repite todo 3 veces.", duration: "45 segundos" }
        ],
        benefits: ["Rutina completa de cuerpo entero", "Mejora resistencia cardiovascular", "Consolida todo lo aprendido"],
        commonMistakes: ["Sacrificar forma por velocidad", "No descansar lo suficiente entre rondas", "Saltarse el calentamiento"]
      },
      {
        name: "Estiramiento y Recuperacion Activa",
        description: "Rutina de flexibilidad y movilidad para mantener los musculos sanos y prevenir lesiones.",
        duration: "15 min",
        frequency: "Diario",
        muscleGroup: "Flexibilidad Total",
        sets: 1,
        reps: "30 segundos por estiramiento",
        restBetweenSets: "Sin descanso, fluir entre estiramientos",
        tempoSeconds: "Mantener cada posicion 30s",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "Estiramiento de cuadriceps: de pie, lleva el talon al gluteo. 30 segundos por pierna.", duration: "30 seg/pierna" },
          { step: 2, instruction: "Estiramiento de isquiotibiales: sentado, piernas extendidas, alcanza los pies. 30 segundos.", duration: "30 segundos" },
          { step: 3, instruction: "Estiramiento de cadera: posicion de paloma o figura 4 acostado. 30 segundos por lado.", duration: "30 seg/lado" },
          { step: 4, instruction: "Estiramiento de pecho: brazos atras entrelazados, abre el pecho. 30 segundos.", duration: "30 segundos" },
          { step: 5, instruction: "Cat-Cow: en cuatro puntos, alterna entre arquear y redondear la espalda. 10 repeticiones.", duration: "60 segundos" },
          { step: 6, instruction: "Posicion del nino: sentado sobre los talones, extiende los brazos al frente. 60 segundos.", duration: "60 segundos", tip: "Respira profundamente y relajate." }
        ],
        benefits: ["Mejora la flexibilidad general", "Previene lesiones", "Acelera la recuperacion muscular"],
        commonMistakes: ["Rebotar en los estiramientos", "No respirar durante los estiramientos", "Forzar mas alla del dolor"]
      }
    ]
  },
  medium: {
    1: [
      {
        name: "Sentadilla Goblet",
        description: "Sentadilla sosteniendo peso frente al pecho para mejor postura y mayor activacion.",
        duration: "10 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas, Gluteos y Core",
        sets: 4,
        reps: "12 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "3s bajada / 1s pausa / 2s subida",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Sostiene una mancuerna, botella de agua o mochila con peso frente al pecho con ambas manos." },
          { step: 2, instruction: "Pies al ancho de hombros, puntas ligeramente afuera. Codos apuntando hacia abajo.", tip: "El peso te ayudara a mantener el torso erguido." },
          { step: 3, instruction: "Baja en 3 segundos empujando las caderas atras y las rodillas hacia afuera.", duration: "3 segundos" },
          { step: 4, instruction: "Baja lo mas profundo posible manteniendo la espalda recta. Pausa 1 segundo.", duration: "1 segundo" },
          { step: 5, instruction: "Sube en 2 segundos empujando con los talones. Aprieta gluteos arriba. 4x12.", duration: "2 segundos" }
        ],
        benefits: ["Mejor postura que sentadilla regular", "Mayor activacion de core", "Mas rango de movimiento"],
        commonMistakes: ["Dejar caer los codos", "Levantar los talones", "No bajar lo suficiente"]
      },
      {
        name: "Flexiones Completas",
        description: "Flexion de brazos tradicional en el suelo, ejercicio fundamental del tren superior.",
        duration: "10 min",
        frequency: "3 veces por semana",
        muscleGroup: "Pecho, Hombros, Triceps y Core",
        sets: 4,
        reps: "10-12 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "2s bajada / 1s pausa / 1s subida",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Posicion de plancha alta: manos un poco mas anchas que los hombros, cuerpo en linea recta." },
          { step: 2, instruction: "Dedos de las manos apuntando hacia adelante. Activa el core y los gluteos.", tip: "Imagina una linea recta de cabeza a talones." },
          { step: 3, instruction: "Baja el pecho al suelo en 2 segundos con los codos a 45 grados del cuerpo.", duration: "2 segundos" },
          { step: 4, instruction: "El pecho debe estar a 2-3 cm del suelo. Pausa 1 segundo.", duration: "1 segundo" },
          { step: 5, instruction: "Empuja explosivamente para subir en 1 segundo. No bloquees los codos.", duration: "1 segundo" },
          { step: 6, instruction: "4 series de 10-12 reps. Si no llegas a 10, termina con flexiones de rodillas." }
        ],
        benefits: ["Ejercicio compuesto de tren superior", "Fortalece core simultaneamente", "No requiere equipamiento"],
        commonMistakes: ["Cadera caida (banana back)", "Codos a 90 grados (lesion de hombro)", "Rango parcial de movimiento"]
      },
      {
        name: "Zancadas Caminando",
        description: "Zancadas con desplazamiento hacia adelante para mayor demanda muscular y cardiovascular.",
        duration: "10 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas, Gluteos y Core",
        sets: 3,
        reps: "12 pasos por pierna",
        restBetweenSets: "60 segundos",
        tempoSeconds: "2s por paso",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "De pie, erguido. Manos en la cintura o con peso a los lados." },
          { step: 2, instruction: "Da un paso largo al frente con la pierna derecha.", tip: "El paso debe ser lo suficientemente largo para que ambas rodillas formen 90 grados." },
          { step: 3, instruction: "Baja la rodilla trasera hasta casi tocar el suelo en 2 segundos.", duration: "2 segundos" },
          { step: 4, instruction: "Empuja con el pie delantero y lleva la pierna trasera hacia adelante para el siguiente paso." },
          { step: 5, instruction: "Continua alternando piernas como si caminaras. 12 pasos por pierna x 3 series." }
        ],
        benefits: ["Trabaja piernas unilateralmente", "Mejora coordinacion y equilibrio", "Componente cardiovascular"],
        commonMistakes: ["Pasos demasiado cortos", "Rodilla delantera pasando el pie", "Perder el equilibrio lateral"]
      },
      {
        name: "Plancha con Toque de Hombro",
        description: "Plancha alta dinamica que desafia la estabilidad anti-rotacional del core.",
        duration: "8 min",
        frequency: "4 veces por semana",
        muscleGroup: "Core, Hombros y Estabilizadores",
        sets: 3,
        reps: "10 toques por lado",
        restBetweenSets: "45 segundos",
        tempoSeconds: "2s por toque",
        difficulty: "moderado",
        steps: [
          { step: 1, instruction: "Posicion de plancha alta (brazos extendidos). Pies separados al ancho de hombros para mas estabilidad." },
          { step: 2, instruction: "Cuerpo en linea recta. Mira al suelo.", tip: "Cuanto mas juntos los pies, mas dificil sera." },
          { step: 3, instruction: "Levanta la mano derecha y toca tu hombro izquierdo. Mantente 1 segundo.", duration: "1 segundo" },
          { step: 4, instruction: "Regresa la mano al suelo. Repite con la mano izquierda al hombro derecho.", tip: "No dejes que las caderas roten. Resiste el movimiento." },
          { step: 5, instruction: "10 toques por lado (20 total) x 3 series. Descansa 45 segundos entre series." }
        ],
        benefits: ["Fortalece estabilidad anti-rotacional", "Trabaja hombros y core", "Mejora la coordinacion"],
        commonMistakes: ["Caderas rotando de lado a lado", "Mover demasiado rapido", "No mantener el core activado"]
      }
    ],
    2: [
      {
        name: "Sentadilla Bulgara",
        description: "Sentadilla unilateral con el pie trasero elevado en una silla o banco.",
        duration: "12 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas, Gluteos y Equilibrio",
        sets: 3,
        reps: "10 repeticiones por pierna",
        restBetweenSets: "60 segundos",
        tempoSeconds: "3s bajada / 1s pausa / 2s subida",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "De espaldas a una silla o banco. Coloca el empeine del pie trasero sobre la superficie." },
          { step: 2, instruction: "El pie delantero esta a unos 60-70 cm del banco. Torso erguido.", tip: "La mayor parte del peso debe estar en el pie delantero." },
          { step: 3, instruction: "Baja en 3 segundos flexionando la rodilla delantera hasta que el muslo este paralelo al suelo.", duration: "3 segundos" },
          { step: 4, instruction: "Pausa 1 segundo abajo. Sube en 2 segundos empujando con el talon delantero.", duration: "2 segundos" },
          { step: 5, instruction: "10 reps por pierna x 3 series. Cambia de pierna despues de completar una serie." }
        ],
        benefits: ["Corrige desequilibrios entre piernas", "Gran activacion de gluteos", "Mejora estabilidad de rodilla"],
        commonMistakes: ["Pie delantero demasiado cerca del banco", "Inclinarse hacia adelante", "Rodilla colapsando hacia adentro"]
      },
      {
        name: "Flexiones Diamante",
        description: "Flexiones con manos juntas formando un diamante que enfatiza los triceps.",
        duration: "8 min",
        frequency: "3 veces por semana",
        muscleGroup: "Triceps, Pecho y Hombros",
        sets: 3,
        reps: "8-10 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "2s bajada / 1s pausa / 2s subida",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Posicion de flexion con las manos juntas bajo el pecho, formando un diamante con los indices y pulgares." },
          { step: 2, instruction: "Cuerpo en linea recta. Codos pegados al cuerpo.", tip: "Si es muy dificil, hazlas de rodillas." },
          { step: 3, instruction: "Baja el pecho hacia las manos en 2 segundos manteniendo los codos pegados.", duration: "2 segundos" },
          { step: 4, instruction: "El pecho toca las manos. Pausa 1 segundo.", duration: "1 segundo" },
          { step: 5, instruction: "Sube en 2 segundos. 3 series de 8-10 reps.", duration: "2 segundos" }
        ],
        benefits: ["Mayor enfasis en triceps", "Fortalece la porcion interna del pecho", "Progresion avanzada de flexiones"],
        commonMistakes: ["Codos abriendose hacia afuera", "No bajar suficiente", "Perder alineacion del cuerpo"]
      },
      {
        name: "Mountain Climbers",
        description: "Ejercicio dinamico de alta intensidad que combina cardio con fortalecimiento de core.",
        duration: "8 min",
        frequency: "4 veces por semana",
        muscleGroup: "Core, Cardio y Cuerpo Completo",
        sets: 4,
        reps: "30 segundos de trabajo",
        restBetweenSets: "30 segundos",
        tempoSeconds: "Ritmo rapido controlado",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Posicion de plancha alta. Manos bajo los hombros, cuerpo en linea recta." },
          { step: 2, instruction: "Lleva la rodilla derecha hacia el pecho rapidamente sin subir la cadera.", tip: "Manten las caderas a la misma altura todo el tiempo." },
          { step: 3, instruction: "Regresa la pierna derecha y simultaneamente lleva la izquierda al pecho." },
          { step: 4, instruction: "Alterna rapidamente como si corrieras en posicion de plancha durante 30 segundos.", duration: "30 segundos" },
          { step: 5, instruction: "Descansa 30 segundos. Repite 4 veces. Mantente controlado, no sacrifiques forma." }
        ],
        benefits: ["Cardio de alta intensidad", "Fortalece core y flexores de cadera", "Quema muchas calorias"],
        commonMistakes: ["Cadera subiendo demasiado", "Perder ritmo y forma", "No llevar la rodilla suficientemente al pecho"]
      }
    ],
    3: [
      {
        name: "Sentadilla con Salto",
        description: "Sentadilla explosiva con salto para desarrollar potencia en piernas.",
        duration: "10 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas, Gluteos y Potencia",
        sets: 4,
        reps: "8 repeticiones",
        restBetweenSets: "90 segundos",
        tempoSeconds: "2s bajada / explota / aterriza suave",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Posicion de sentadilla estandar. Pies al ancho de hombros." },
          { step: 2, instruction: "Baja en 2 segundos a una sentadilla profunda.", duration: "2 segundos" },
          { step: 3, instruction: "Desde abajo, salta explosivamente lo mas alto posible extendiendo todo el cuerpo.", tip: "Usa los brazos para generar impulso." },
          { step: 4, instruction: "Aterriza suavemente en la punta de los pies, rodillas ligeramente flexionadas. Absorbe el impacto.", tip: "El aterrizaje debe ser silencioso." },
          { step: 5, instruction: "Inmediatamente baja a la siguiente sentadilla. 4 series de 8 reps. Descansa 90 segundos." }
        ],
        benefits: ["Desarrolla potencia explosiva", "Mayor quema calorica", "Mejora capacidad atletica"],
        commonMistakes: ["Aterrizar con rodillas bloqueadas", "No bajar suficiente antes de saltar", "Aterrizaje ruidoso (mucho impacto)"]
      },
      {
        name: "Burpees Controlados",
        description: "El ejercicio de cuerpo completo por excelencia. Combina fuerza, cardio y potencia.",
        duration: "10 min",
        frequency: "3 veces por semana",
        muscleGroup: "Cuerpo Completo y Cardio",
        sets: 4,
        reps: "8 repeticiones",
        restBetweenSets: "90 segundos",
        tempoSeconds: "Movimiento fluido controlado",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "De pie, erguido. Pies al ancho de hombros." },
          { step: 2, instruction: "Baja a cuclillas y coloca las manos en el suelo frente a ti." },
          { step: 3, instruction: "Salta con los pies hacia atras a posicion de plancha. Manten el core activado.", tip: "El cuerpo debe estar recto en la plancha." },
          { step: 4, instruction: "Realiza una flexion completa (pecho al suelo y sube).", tip: "Si es muy dificil, omite la flexion al principio." },
          { step: 5, instruction: "Salta con los pies hacia las manos volviendo a cuclillas." },
          { step: 6, instruction: "Salta explosivamente hacia arriba con los brazos sobre la cabeza. Aterriza suave y repite." }
        ],
        benefits: ["Ejercicio de cuerpo completo mas efectivo", "Maximiza quema de calorias", "Mejora resistencia cardiovascular"],
        commonMistakes: ["Espalda arqueada en la plancha", "Omitir la flexion completa", "No saltar lo suficientemente alto"]
      }
    ],
    4: [
      {
        name: "Pistol Squat Asistida",
        description: "Sentadilla a una pierna con asistencia de una silla o poste para desarrollar fuerza unilateral avanzada.",
        duration: "12 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas, Gluteos y Equilibrio",
        sets: 3,
        reps: "6 repeticiones por pierna",
        restBetweenSets: "90 segundos",
        tempoSeconds: "4s bajada / 1s pausa / 3s subida",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "De pie sobre una pierna, sosteniendote de un poste, silla o puerta para asistencia." },
          { step: 2, instruction: "Extiende la pierna libre al frente. Brazos al frente para equilibrio.", tip: "Solo usa la asistencia lo minimo necesario." },
          { step: 3, instruction: "Baja lentamente en 4 segundos sobre una sola pierna lo mas profundo posible.", duration: "4 segundos" },
          { step: 4, instruction: "Pausa 1 segundo abajo. Sube en 3 segundos empujando con toda la planta.", duration: "3 segundos" },
          { step: 5, instruction: "6 reps por pierna x 3 series. Este ejercicio requiere mucha concentracion." }
        ],
        benefits: ["Fuerza unilateral maxima", "Mejora equilibrio avanzado", "Preparacion para pistol squat libre"],
        commonMistakes: ["Depender demasiado de la asistencia", "Rodilla colapsando hacia adentro", "No bajar suficiente"]
      },
      {
        name: "Pike Push-ups",
        description: "Flexion con caderas elevadas que enfatiza los hombros, progresion hacia handstand push-ups.",
        duration: "8 min",
        frequency: "3 veces por semana",
        muscleGroup: "Hombros, Triceps y Trapecio",
        sets: 3,
        reps: "8-10 repeticiones",
        restBetweenSets: "60 segundos",
        tempoSeconds: "2s bajada / 1s pausa / 2s subida",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Posicion de plancha alta. Camina con los pies hacia las manos levantando las caderas formando una V invertida." },
          { step: 2, instruction: "Las manos estan al ancho de hombros. La cabeza mira hacia los pies.", tip: "Cuanto mas vertical estes, mas dificil sera." },
          { step: 3, instruction: "Flexiona los codos y baja la cabeza hacia el suelo en 2 segundos.", duration: "2 segundos" },
          { step: 4, instruction: "La coronilla casi toca el suelo. Pausa 1 segundo.", duration: "1 segundo" },
          { step: 5, instruction: "Empuja para subir en 2 segundos. 3x8-10 reps.", duration: "2 segundos" }
        ],
        benefits: ["Fortalece hombros sin equipamiento", "Progresion hacia handstand push-ups", "Trabaja trapecio superior"],
        commonMistakes: ["Codos abriendose hacia afuera", "No bajar suficiente", "Caderas no lo suficientemente elevadas"]
      }
    ],
    5: [
      {
        name: "Circuito HIIT Intermedio",
        description: "Circuito de alta intensidad combinando los mejores ejercicios del programa.",
        duration: "25 min",
        frequency: "4 veces por semana",
        muscleGroup: "Cuerpo Completo y Cardio",
        sets: 4,
        reps: "40 segundos trabajo / 20 segundos descanso",
        restBetweenSets: "90 segundos entre rondas",
        tempoSeconds: "Maximo esfuerzo controlado",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Calentamiento: 3 minutos de saltos suaves, rotaciones y movilidad articular.", duration: "3 minutos" },
          { step: 2, instruction: "Ejercicio 1: Sentadillas con salto - 40 segundos de trabajo, 20 de descanso.", duration: "40 segundos" },
          { step: 3, instruction: "Ejercicio 2: Flexiones completas - 40 segundos, 20 descanso.", duration: "40 segundos" },
          { step: 4, instruction: "Ejercicio 3: Mountain climbers - 40 segundos, 20 descanso.", duration: "40 segundos" },
          { step: 5, instruction: "Ejercicio 4: Burpees - 40 segundos, 20 descanso.", duration: "40 segundos" },
          { step: 6, instruction: "Ejercicio 5: Plancha con toque de hombro - 40 seg, 20 desc. Descanso 90s entre rondas. 4 rondas total.", duration: "40 segundos" }
        ],
        benefits: ["Quema maxima de calorias", "Mejora VO2max", "Efecto afterburn (quema calorias post-ejercicio)"],
        commonMistakes: ["No calentar adecuadamente", "Sacrificar forma por velocidad", "No descansar suficiente entre rondas"]
      },
      {
        name: "Movilidad y Recuperacion Activa",
        description: "Sesion de movilidad profunda y estiramientos para optimizar la recuperacion.",
        duration: "20 min",
        frequency: "3 veces por semana",
        muscleGroup: "Flexibilidad y Movilidad",
        sets: 1,
        reps: "45 segundos por posicion",
        restBetweenSets: "Transicion fluida entre posiciones",
        tempoSeconds: "Mantener cada posicion 45s",
        difficulty: "facil",
        steps: [
          { step: 1, instruction: "World's Greatest Stretch: zancada con rotacion toracica. 45 segundos por lado.", duration: "45 seg/lado" },
          { step: 2, instruction: "Estiramiento 90/90 de cadera: sentado, piernas en angulo de 90 grados, rota entre lados.", duration: "45 seg/lado" },
          { step: 3, instruction: "Estiramiento de pectoral en puerta: brazo contra el marco, gira el cuerpo opuesto.", duration: "45 seg/lado" },
          { step: 4, instruction: "Perro boca abajo: posicion de yoga, empuja las caderas arriba y atras, talones al suelo.", duration: "60 segundos" },
          { step: 5, instruction: "Torsion espinal acostado: acostado boca arriba, rodillas a un lado, brazos abiertos.", duration: "45 seg/lado" },
          { step: 6, instruction: "Posicion del nino con brazos extendidos: relajacion total. Respiraciones profundas.", duration: "60 segundos" }
        ],
        benefits: ["Acelera recuperacion muscular", "Previene lesiones", "Mejora rendimiento en los entrenamientos"],
        commonMistakes: ["Estirar en frio (siempre despues de entrenar)", "Forzar mas alla del dolor", "No respirar profundamente"]
      }
    ],
    6: [
      {
        name: "Programa de Mantenimiento Intermedio",
        description: "Plan sostenible combinando fuerza y cardio para mantener el nivel alcanzado.",
        duration: "40 min",
        frequency: "5 veces por semana",
        muscleGroup: "Cuerpo Completo",
        sets: 4,
        reps: "Variado por ejercicio",
        restBetweenSets: "60-90 segundos",
        tempoSeconds: "Controlado con intensidad moderada-alta",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Lunes y Jueves - Tren Superior: Flexiones 4x12, Pike push-ups 3x8, Flexiones diamante 3x10, Plancha 3x45s.", duration: "30-35 min" },
          { step: 2, instruction: "Martes y Viernes - Tren Inferior: Sentadilla bulgara 3x10, Zancadas caminando 3x12, Sentadilla con salto 4x8, Puente gluteos 3x15.", duration: "30-35 min" },
          { step: 3, instruction: "Miercoles - HIIT: Circuito completo de 4 rondas con todos los ejercicios aprendidos.", duration: "25 min" },
          { step: 4, instruction: "Sabado - Movilidad y recuperacion activa: sesion completa de estiramientos.", duration: "20 min" },
          { step: 5, instruction: "Domingo - Descanso total o caminata ligera de 30 minutos.", duration: "0-30 min" }
        ],
        benefits: ["Plan completo y sostenible", "Equilibrio entre fuerza, cardio y recuperacion", "Mantiene los resultados a largo plazo"],
        commonMistakes: ["No descansar el domingo", "Aumentar intensidad demasiado rapido", "Ignorar la sesion de movilidad"]
      }
    ]
  },
  advanced: {
    1: [
      {
        name: "Sentadilla Profunda con Pausa",
        description: "Sentadilla completa mas alla de paralelo con pausa isometrica para maxima activacion.",
        duration: "12 min",
        frequency: "4 veces por semana",
        muscleGroup: "Piernas, Gluteos y Core",
        sets: 5,
        reps: "10 repeticiones",
        restBetweenSets: "90 segundos",
        tempoSeconds: "3s bajada / 3s pausa / 2s subida explosiva",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Pies al ancho de hombros. Puedes sostener peso adicional (mochila, mancuernas, galon de agua)." },
          { step: 2, instruction: "Baja controladamente en 3 segundos hasta la profundidad maxima (muslos mas alla de paralelo).", duration: "3 segundos", tip: "La profundidad depende de tu movilidad. No fuerces si hay dolor." },
          { step: 3, instruction: "Mantente en la posicion mas baja durante 3 segundos completos. Respira.", duration: "3 segundos" },
          { step: 4, instruction: "Sube explosivamente en 2 segundos empujando con toda la planta del pie.", duration: "2 segundos" },
          { step: 5, instruction: "5 series de 10 reps. Descansa 90 segundos entre series." }
        ],
        benefits: ["Maxima activacion de gluteos", "Mejora movilidad profunda", "Construye fuerza real funcional"],
        commonMistakes: ["Rebotar en la posicion baja", "Perder tension durante la pausa", "Redondear la espalda baja"]
      },
      {
        name: "Flexiones Archer",
        description: "Flexion avilateral donde un brazo se extiende al lado, progresion hacia flexiones a un brazo.",
        duration: "10 min",
        frequency: "3 veces por semana",
        muscleGroup: "Pecho, Hombros y Triceps",
        sets: 4,
        reps: "6-8 repeticiones por lado",
        restBetweenSets: "90 segundos",
        tempoSeconds: "3s bajada / 1s pausa / 2s subida",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Posicion de flexion con las manos mucho mas separadas de lo normal (doble del ancho de hombros)." },
          { step: 2, instruction: "Gira las manos para que los dedos apunten hacia afuera.", tip: "El brazo que se extiende solo sirve de soporte." },
          { step: 3, instruction: "Baja hacia el lado derecho en 3 segundos, el brazo izquierdo se extiende recto.", duration: "3 segundos" },
          { step: 4, instruction: "El pecho baja hacia la mano derecha. Pausa 1 segundo.", duration: "1 segundo" },
          { step: 5, instruction: "Sube en 2 segundos. Alterna lados. 4 series de 6-8 reps por lado.", duration: "2 segundos" }
        ],
        benefits: ["Progresion hacia flexiones a un brazo", "Mayor carga en cada lado", "Desarrolla fuerza asimetrica"],
        commonMistakes: ["No bajar suficiente", "El brazo extendido se flexiona", "Cadera rotando"]
      },
      {
        name: "Pistol Squat (Sentadilla a una pierna)",
        description: "La sentadilla a una pierna completa, uno de los ejercicios mas desafiantes de peso corporal.",
        duration: "12 min",
        frequency: "3 veces por semana",
        muscleGroup: "Piernas, Gluteos, Core y Equilibrio",
        sets: 4,
        reps: "5 repeticiones por pierna",
        restBetweenSets: "120 segundos",
        tempoSeconds: "4s bajada / 1s pausa / 3s subida",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "De pie sobre una pierna. La pierna libre extendida al frente, brazos al frente para equilibrio." },
          { step: 2, instruction: "Baja lentamente en 4 segundos sobre una sola pierna hasta que el gluteo casi toque el talon.", duration: "4 segundos", tip: "Si no puedes bajar completo, baja a una caja o silla baja." },
          { step: 3, instruction: "Pausa 1 segundo en la posicion mas baja posible.", duration: "1 segundo" },
          { step: 4, instruction: "Sube en 3 segundos empujando con toda la planta sin ayuda.", duration: "3 segundos" },
          { step: 5, instruction: "5 reps por pierna x 4 series. Descansa 120 segundos entre series." }
        ],
        benefits: ["Fuerza unilateral maxima", "Equilibrio y control motor avanzado", "Indicador de fuerza funcional real"],
        commonMistakes: ["Inclinarse demasiado hacia adelante", "Rodilla colapsando hacia adentro", "No controlar el descenso"]
      },
      {
        name: "L-Sit Hold (en el suelo)",
        description: "Mantenida isometrica avanzada con las piernas extendidas al frente y el cuerpo elevado.",
        duration: "8 min",
        frequency: "4 veces por semana",
        muscleGroup: "Core, Triceps, Flexores de Cadera",
        sets: 5,
        reps: "15-20 segundos mantenida",
        restBetweenSets: "60 segundos",
        tempoSeconds: "Mantener 15-20s estatico",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Sentado en el suelo con las piernas extendidas al frente. Manos a los lados de las caderas." },
          { step: 2, instruction: "Presiona las palmas contra el suelo y eleva todo el cuerpo del suelo.", tip: "Si no puedes elevar las piernas, comienza con rodillas flexionadas (Tuck L-sit)." },
          { step: 3, instruction: "Manten las piernas rectas y paralelas al suelo formando una L con el torso.", duration: "15-20 segundos" },
          { step: 4, instruction: "Mantente 15-20 segundos. Respira de forma controlada.", tip: "Activa fuertemente el abdomen y los cuadriceps." },
          { step: 5, instruction: "Baja con control. Descansa 60 segundos. 5 series totales." }
        ],
        benefits: ["Fuerza de core extrema", "Fortalece flexores de cadera", "Mejora la compresion del cuerpo"],
        commonMistakes: ["Piernas bajando por falta de fuerza", "Hombros subiendo a las orejas", "No respirar durante la mantenida"]
      }
    ],
    2: [
      {
        name: "Handstand Push-up Contra Pared",
        description: "Flexiones en posicion invertida contra la pared para hombros de acero.",
        duration: "12 min",
        frequency: "3 veces por semana",
        muscleGroup: "Hombros, Triceps y Trapecio",
        sets: 4,
        reps: "5-8 repeticiones",
        restBetweenSets: "120 segundos",
        tempoSeconds: "3s bajada / 1s pausa / 2s subida",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "De espaldas a la pared, coloca las manos en el suelo y sube los pies por la pared hasta quedar invertido." },
          { step: 2, instruction: "Manos al ancho de hombros, dedos apuntando a la pared. Core y gluteos activados.", tip: "Practica primero solo mantener la posicion invertida." },
          { step: 3, instruction: "Baja la cabeza al suelo en 3 segundos flexionando los codos.", duration: "3 segundos" },
          { step: 4, instruction: "La cabeza toca suavemente el suelo entre las manos. Pausa 1 segundo.", duration: "1 segundo" },
          { step: 5, instruction: "Empuja para subir en 2 segundos. 4 series de 5-8 reps.", duration: "2 segundos" }
        ],
        benefits: ["Hombros extremadamente fuertes", "Mejora el equilibrio invertido", "Progresion hacia handstand libre"],
        commonMistakes: ["Arquear excesivamente la espalda", "Dejar caer demasiado rapido", "No activar el core"]
      },
      {
        name: "Muscle-Up Negativa",
        description: "Fase excentrica del muscle-up para construir la fuerza necesaria para el movimiento completo.",
        duration: "10 min",
        frequency: "3 veces por semana",
        muscleGroup: "Espalda, Pecho, Hombros y Triceps",
        sets: 4,
        reps: "3-5 repeticiones",
        restBetweenSets: "120 segundos",
        tempoSeconds: "5s bajada controlada",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Necesitas una barra de dominadas. Salta o usa una silla para llegar arriba de la barra en posicion de dip." },
          { step: 2, instruction: "Desde arriba de la barra, brazos extendidos, cuerpo recto.", tip: "Si no tienes barra, usa un parque de calistenia." },
          { step: 3, instruction: "Baja lentamente durante 5 segundos completos hasta quedar colgado con brazos extendidos.", duration: "5 segundos" },
          { step: 4, instruction: "Manten el control durante toda la bajada. No te dejes caer.", tip: "La negativa construye fuerza para el movimiento completo." },
          { step: 5, instruction: "Vuelve arriba con ayuda y repite. 4 series de 3-5 negativas." }
        ],
        benefits: ["Construye fuerza para muscle-ups", "Trabaja toda la cadena superior", "Fase excentrica = mas fuerza"],
        commonMistakes: ["Bajar demasiado rapido", "No mantener tension todo el recorrido", "Saltarse el calentamiento de hombros"]
      }
    ],
    3: [
      {
        name: "Planche Lean (Inclinacion de Planche)",
        description: "Posicion de plancha inclinada hacia adelante para desarrollar fuerza de planche.",
        duration: "8 min",
        frequency: "4 veces por semana",
        muscleGroup: "Hombros, Pecho, Core y Munecas",
        sets: 5,
        reps: "15-20 segundos mantenida",
        restBetweenSets: "90 segundos",
        tempoSeconds: "Mantener 15-20s con inclinacion",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Posicion de plancha alta con manos al ancho de hombros, dedos apuntando hacia adelante." },
          { step: 2, instruction: "Gira las manos para que los dedos apunten hacia los lados o ligeramente atras.", tip: "Calienta bien las munecas antes." },
          { step: 3, instruction: "Inclinate hacia adelante llevando los hombros por delante de las manos lo mas posible." },
          { step: 4, instruction: "Mantente en la posicion inclinada 15-20 segundos con core y gluteos activados.", duration: "15-20 segundos" },
          { step: 5, instruction: "Regresa a plancha normal para descansar. 5 series. Progresa inclinandote mas cada semana." }
        ],
        benefits: ["Base para aprender planche", "Fuerza extrema de hombros", "Fortalece munecas y antebrazos"],
        commonMistakes: ["No calentar las munecas", "Cadera cayendo", "Inclinarse demasiado rapido sin progresion"]
      },
      {
        name: "Dragon Flag Negativa",
        description: "Ejercicio de core avanzado popularizado por Bruce Lee. Fase excentrica controlada.",
        duration: "8 min",
        frequency: "3 veces por semana",
        muscleGroup: "Core Completo",
        sets: 4,
        reps: "5 repeticiones",
        restBetweenSets: "90 segundos",
        tempoSeconds: "5s bajada controlada",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Acuestate en un banco o en el suelo. Agarra algo fijo detras de tu cabeza (pata de banco, base pesada)." },
          { step: 2, instruction: "Eleva las piernas y caderas hasta quedar casi vertical, apoyandote en los hombros.", tip: "Solo los hombros y la parte alta de la espalda tocan la superficie." },
          { step: 3, instruction: "Desde arriba, baja el cuerpo rigido como una tabla durante 5 segundos completos.", duration: "5 segundos" },
          { step: 4, instruction: "El cuerpo entero (desde los hombros hasta los pies) se mueve como una unidad.", tip: "Si es muy dificil, flexiona las rodillas." },
          { step: 5, instruction: "No dejes que la cadera toque el suelo hasta el final. Vuelve arriba y repite." }
        ],
        benefits: ["Uno de los ejercicios de core mas dificiles", "Fuerza abdominal extrema", "Mejora el control corporal total"],
        commonMistakes: ["Caderas flexionandose (rompiendo la linea)", "Bajar demasiado rapido", "No agarrarse firmemente"]
      }
    ],
    4: [
      {
        name: "Entrenamiento de Potencia Avanzado",
        description: "Combinacion de ejercicios explosivos para desarrollar potencia maxima.",
        duration: "30 min",
        frequency: "3 veces por semana",
        muscleGroup: "Cuerpo Completo - Potencia",
        sets: 5,
        reps: "5 repeticiones por ejercicio",
        restBetweenSets: "120 segundos entre series",
        tempoSeconds: "Maximo esfuerzo explosivo",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Calentamiento progresivo: 5 minutos de movilidad + ejercicios a baja intensidad.", duration: "5 minutos" },
          { step: 2, instruction: "Sentadilla con salto maximo: 5 reps explosivas, enfocandote en altura maxima.", duration: "Explosivo" },
          { step: 3, instruction: "Flexiones con palmada: 5 reps, empuja tan fuerte que las manos se despeguen del suelo.", tip: "Aterriza con codos ligeramente flexionados." },
          { step: 4, instruction: "Burpees explosivos: 5 reps con maximo salto al final.", duration: "Explosivo" },
          { step: 5, instruction: "5 series del circuito completo. 120 segundos de descanso entre series." }
        ],
        benefits: ["Potencia maxima", "Mejora velocidad y explosion", "Efecto afterburn prolongado"],
        commonMistakes: ["Entrenar fatigado (riesgo de lesion)", "No calentar completamente", "Hacer mas reps de las indicadas"]
      }
    ],
    5: [
      {
        name: "Circuito de Calistenia Elite",
        description: "Circuito combinando los ejercicios mas avanzados del programa para un desafio extremo.",
        duration: "35 min",
        frequency: "4 veces por semana",
        muscleGroup: "Cuerpo Completo",
        sets: 4,
        reps: "Variado por ejercicio",
        restBetweenSets: "120 segundos entre rondas",
        tempoSeconds: "Controlado con maxima intensidad",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Calentamiento completo: 5 min movilidad + 5 min ejercicios a baja intensidad.", duration: "10 minutos" },
          { step: 2, instruction: "Pistol squats: 5 por pierna. Sin descanso, ir a siguiente ejercicio.", duration: "2 minutos" },
          { step: 3, instruction: "Flexiones archer: 6 por lado. Sin descanso.", duration: "2 minutos" },
          { step: 4, instruction: "L-sit hold: 20 segundos. Sin descanso.", duration: "20 segundos" },
          { step: 5, instruction: "Handstand push-ups contra pared: 5 reps. Sin descanso.", duration: "1 minuto" },
          { step: 6, instruction: "Dragon flag negativa: 5 reps. Descanso 120 segundos. Repetir 4 rondas.", duration: "1 minuto" }
        ],
        benefits: ["Programa de elite completo", "Maxima fuerza y resistencia", "Dominio del peso corporal"],
        commonMistakes: ["No descansar suficiente entre rondas", "Entrenar con lesiones activas", "Omitir el calentamiento"]
      }
    ],
    6: [
      {
        name: "Programa de Maestria Calistenica",
        description: "Plan semanal completo de calistenia avanzada para mantener y superar el nivel elite.",
        duration: "45-60 min",
        frequency: "6 veces por semana",
        muscleGroup: "Cuerpo Completo - Elite",
        sets: 5,
        reps: "Variado segun el dia",
        restBetweenSets: "90-120 segundos",
        tempoSeconds: "Variado por ejercicio y dia",
        difficulty: "intenso",
        steps: [
          { step: 1, instruction: "Lunes - Empuje: Handstand push-ups 4x6, Flexiones archer 4x8, Pike push-ups 3x10, Planche lean 5x20s.", duration: "45 min" },
          { step: 2, instruction: "Martes - Tiron: Muscle-up negativas 4x4, Dominadas (si hay barra) 4x8, Remos invertidos 3x12.", duration: "40 min" },
          { step: 3, instruction: "Miercoles - Piernas: Pistol squats 4x5, Sentadilla profunda 5x10, Sentadilla con salto 4x8, Zancadas bulgara 3x10.", duration: "45 min" },
          { step: 4, instruction: "Jueves - Core: L-sit 5x20s, Dragon flag 4x5, Plancha con peso 4x60s, Hollow body hold 4x30s.", duration: "35 min" },
          { step: 5, instruction: "Viernes - Circuito HIIT: 5 rondas del circuito elite completo.", duration: "35 min" },
          { step: 6, instruction: "Sabado - Movilidad profunda y skill work (practica de movimientos). Domingo - Descanso completo.", duration: "30 min" }
        ],
        benefits: ["Programa completo de atleta", "Equilibrio entre todas las cualidades fisicas", "Sostenible a largo plazo"],
        commonMistakes: ["Saltarse dias de descanso", "Ignorar la movilidad", "No escuchar al cuerpo ante el sobreentrenamiento"]
      }
    ]
  }
};

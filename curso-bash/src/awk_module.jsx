// Módulo: awk — El procesador de texto definitivo
// Usa como ejemplos reales: linux.txt y marvel_wiki.csv

export const AWK_SECTION = {
  id: "awk",
  icon: "🦅",
  title: "awk — El procesador de texto definitivo",
  subtitle: "Filtra, transforma y analiza datos como un pro",
  intro:
    "awk es un lenguaje de programación completo disfrazado de comando. Lee un archivo línea por línea, lo divide en campos, y ejecuta acciones sobre cada línea. Es la navaja suiza para procesar CSVs, logs y cualquier texto estructurado.",
  blocks: [
    {
      type: "example",
      title: "Anatomía de un comando awk",
      content: `awk 'PATRÓN { ACCIÓN }' archivo.txt

  ┌───────────────────────────────────────────────────────┐
  │  awk  'NR > 1 { print $2, $11 }'  marvel_wiki.csv    │
  │   │       │          │                │               │
  │   │       │          │                └── archivo     │
  │   │       │          └── acción: imprimir col 2 y 11  │
  │   │       └── patrón: saltar primera línea (header)   │
  │   └── el programa                                     │
  └───────────────────────────────────────────────────────┘

  • Sin PATRÓN  → se ejecuta en TODAS las líneas
  • Sin ACCIÓN  → la acción por defecto es { print }
  • $0 = línea completa   $1 = primer campo   $NF = último campo`,
    },
    {
      type: "commands",
      title: "Sintaxis básica — usando linux.txt",
      items: [
        {
          cmd: "awk '{ print }' linux.txt",
          desc: "Imprimir todo el archivo (equivalente a cat)",
        },
        {
          cmd: "awk '{ print $1 }' linux.txt",
          desc: "Imprimir solo el primer campo (el número) de cada línea",
        },
        {
          cmd: "awk '{ print $2, $3, $4 }' linux.txt",
          desc: "Imprimir campos 2, 3 y 4 (primeras palabras del hecho)",
          output: "Linux fue creado por",
        },
        {
          cmd: "awk '{ print NR, $0 }' linux.txt",
          desc: "Imprimir número de línea + línea completa (NR = número de registro)",
        },
        {
          cmd: "awk 'END { print NR }' linux.txt",
          desc: "Contar cuántas líneas tiene el archivo",
          output: "100",
        },
        {
          cmd: "awk 'NR==1' linux.txt",
          desc: "Imprimir solo la primera línea",
          output: "1. Linux fue creado por Linus Torvalds en 1991.",
        },
        {
          cmd: "awk 'NR>=10 && NR<=15' linux.txt",
          desc: "Imprimir líneas 10 a 15 (rango)",
          output: "10. El 100% de las 500 supercomputadoras...",
        },
      ],
    },
    {
      type: "commands",
      title: "Separador de campos (-F) — usando marvel_wiki.csv",
      items: [
        {
          cmd: "awk -F',' '{ print $2 }' marvel_wiki.csv",
          desc: "-F',' define la coma como separador → imprime columna 'name'",
        },
        {
          cmd: "awk -F',' 'NR==1' marvel_wiki.csv",
          desc: "Ver cabecera del CSV para conocer qué columna es cuál",
          output:
            "page_id,name,urlslug,ID,ALIGN,EYE,HAIR,SEX,GSM,ALIVE,APPEARANCES,FIRST APPEARANCE,Year",
        },
        {
          cmd: "awk -F',' 'NR>1 { print $2 }' marvel_wiki.csv",
          desc: "Imprimir solo nombres (NR>1 salta el header)",
        },
        {
          cmd: "awk -F',' 'NR>1 { print $2, $11 }' marvel_wiki.csv",
          desc: "Nombre + número de apariciones de cada personaje",
        },
        {
          cmd: "awk -F',' 'NR>1 { print $2, \"->\", $5 }' marvel_wiki.csv",
          desc: "Nombre → alineación (Good / Bad / Neutral Characters)",
        },
        {
          cmd: "awk -F',' 'NR>1 { print $2, $8 }' marvel_wiki.csv",
          desc: "Nombre + género del personaje",
        },
      ],
    },
    {
      type: "commands",
      title: "Patrones — Filtrar líneas por condición",
      items: [
        {
          cmd: "awk '/Linux/' linux.txt",
          desc: "Imprimir todas las líneas que contienen 'Linux'",
        },
        {
          cmd: "awk '/kernel/' linux.txt",
          desc: "Imprimir líneas que mencionan 'kernel'",
        },
        {
          cmd: "awk '!/Linux/' linux.txt",
          desc: "! niega el patrón → líneas que NO contienen 'Linux'",
        },
        {
          cmd: "awk -F',' '$5 == \"Bad Characters\"' marvel_wiki.csv",
          desc: "Filtrar personajes malos (ALIGN = columna 5)",
        },
        {
          cmd: 'awk -F\',\' \'$5 == "Good Characters" && $8 == "Female Characters"\' marvel_wiki.csv',
          desc: "Heroínas: personajes buenos Y femeninos al mismo tiempo",
        },
        {
          cmd: "awk -F',' 'NR>1 && $11+0 > 1000' marvel_wiki.csv",
          desc: "Personajes con más de 1000 apariciones (+0 convierte a número)",
        },
        {
          cmd: "awk -F',' 'NR>1 && $10 == \"Deceased Characters\"' marvel_wiki.csv",
          desc: "Personajes que han muerto (columna ALIVE = col 10)",
        },
      ],
    },
    {
      type: "commands",
      title: "Variables integradas de awk",
      items: [
        {
          cmd: "awk '{ print NR, NF, $0 }' linux.txt",
          desc: "NR = número de línea, NF = número de campos en esa línea",
        },
        {
          cmd: "awk -F',' 'NR>1 { print NF }' marvel_wiki.csv | sort -u",
          desc: "Ver cuántos campos (columnas) tiene cada fila del CSV",
        },
        {
          cmd: "awk '{ print $NF }' linux.txt",
          desc: "$NF = el ÚLTIMO campo de cada línea",
        },
        {
          cmd: "awk -F',' 'NR>1 { print $1, $NF }' marvel_wiki.csv",
          desc: "page_id + último campo (Year) de cada personaje",
        },
        {
          cmd: "awk 'BEGIN { print \"=== linux.txt ===\"} { print } END { print \"Total:\", NR }' linux.txt",
          desc: "BEGIN y END: código que corre antes/después de leer el archivo",
        },
      ],
    },
    {
      type: "commands",
      title: "Operaciones matemáticas y acumuladores",
      items: [
        {
          cmd: "awk -F',' 'NR>1 { total += $11 } END { print \"Total apariciones:\", total }' marvel_wiki.csv",
          desc: "Sumar todas las apariciones de todos los personajes del CSV",
        },
        {
          cmd: "awk -F',' 'NR>1 { count++ } END { print \"Personajes:\", count }' marvel_wiki.csv",
          desc: "Contar cuántos personajes hay en el dataset",
        },
        {
          cmd: "awk -F',' 'NR>1 { total += $11; count++ } END { printf \"Promedio: %.1f\\n\", total/count }' marvel_wiki.csv",
          desc: "Calcular el promedio de apariciones por personaje",
        },
        {
          cmd: "awk -F',' 'NR>1 && $11+0 > max { max=$11; name=$2 } END { print \"Más apariciones:\", name, max }' marvel_wiki.csv",
          desc: "El personaje con más apariciones (Spider-Man: 4043 👀)",
        },
        {
          cmd: "awk -F',' 'NR>1 && $13+0 <= 1970 { count++ } END { print \"Personajes pre-1970:\", count }' marvel_wiki.csv",
          desc: "Contar personajes creados antes de los años 70",
        },
      ],
    },
    {
      type: "commands",
      title: "printf — Formatear la salida",
      items: [
        {
          cmd: "awk -F',' 'NR>1 { printf \"%-40s %s\\n\", $2, $11 }' marvel_wiki.csv | head -15",
          desc: "%-40s = 40 chars de ancho → columnas alineadas",
        },
        {
          cmd: "awk '{ printf \"%3d | %s\\n\", NR, $0 }' linux.txt",
          desc: "%3d = número con 3 dígitos de ancho, imprime NR + línea alineada",
        },
        {
          cmd: "awk -F',' 'NR>1 && $11+0 > 2000 { printf \"%-35s %5d apariciones\\n\", $2, $11 }' marvel_wiki.csv",
          desc: "Tabla formateada de personajes con más de 2000 apariciones",
        },
      ],
    },
    {
      type: "commands",
      title: "Pipelines reales con awk + otros comandos",
      items: [
        {
          cmd: "awk -F',' 'NR>1 { print $5 }' marvel_wiki.csv | sort | uniq -c | sort -rn",
          desc: "Contar cuántos personajes hay de cada alineación (Good/Bad/Neutral)",
        },
        {
          cmd: "awk -F',' 'NR>1 { print $8 }' marvel_wiki.csv | sort | uniq -c | sort -rn",
          desc: "Distribución de géneros en el universo Marvel",
        },
        {
          cmd: "awk -F',' '$5==\"Bad Characters\" { print $2 }' marvel_wiki.csv | wc -l",
          desc: "¿Cuántos villanos hay en total en el dataset?",
        },
        {
          cmd: "grep -i 'servidor' linux.txt | awk '{ print NR\". \"$0 }'",
          desc: "grep filtra líneas de servidores, awk las renumera",
        },
        {
          cmd: "awk -F',' 'NR>1 && $8==\"Female Characters\" && $11+0 > 500' marvel_wiki.csv | awk -F',' '{ print $2, $11 }' | sort -k2 -rn",
          desc: "Top heroínas con más de 500 apariciones, ordenadas de mayor a menor",
        },
        {
          cmd: "awk '/distribuc/' linux.txt | awk '{ print NR\". \"$0 }'",
          desc: "Todos los hechos sobre distribuciones de Linux, renumerados",
        },
      ],
    },
    {
      type: "example",
      title: "Caso real: Reporte de Marvel con awk",
      content: `# Generar reporte completo desde marvel_wiki.csv con awk multi-línea

$ awk -F',' '
  BEGIN {
    print "=== TOP PERSONAJES MARVEL (>2000 apariciones) ==="
    print "---"
  }
  NR > 1 && $11 + 0 > 2000 {
    printf "%-35s | %4d apariciones | %s\\n", $2, $11, $5
  }
  END {
    print "---"
    print "Total personajes procesados:", NR-1
  }
' marvel_wiki.csv

# Resultado:
=== TOP PERSONAJES MARVEL (>2000 apariciones) ===
---
Spider-Man (Peter Parker)           | 4043 apariciones | Good Characters
Captain America (Steven Rogers)     | 3360 apariciones | Good Characters
Wolverine (James "Logan" Howlett)   | 3061 apariciones | Neutral Characters
Iron Man (Anthony "Tony" Stark)     | 2961 apariciones | Good Characters
Thor (Thor Odinson)                 | 2258 apariciones | Good Characters
Benjamin Grimm (Earth-616)          | 2255 apariciones | Good Characters
Reed Richards (Earth-616)           | 2072 apariciones | Good Characters
Hulk (Robert Bruce Banner)          | 2017 apariciones | Good Characters
---
Total personajes procesados: 16376`,
    },
    {
      type: "example",
      title: "Caso real: Analizar linux.txt con awk",
      content: `# Contar cuántas veces aparece cada palabra clave en linux.txt

$ awk '
  /Linux/    { linux++ }
  /kernel/   { kernel++ }
  /terminal/ { terminal++ }
  /servidor/ { servidor++ }
  /seguro/   { seguro++ }
  END {
    print "Linux:    " linux
    print "kernel:   " kernel
    print "terminal: " terminal
    print "servidor: " servidor
    print "seguro:   " seguro
  }
' linux.txt

# Resultado:
Linux:    84
kernel:    5
terminal:  2
servidor:  4
seguro:    1

# Imprimir los hechos del 10 al 15 con formato:
$ awk 'NR>=10 && NR<=15 { printf  "%2d → %s\\n", NR, $0 }' linux.txt
10 → 10. El 100% de las 500 supercomputadoras más rápidas del mundo usan Linux.
11 → 11. Linux es software libre y de código abierto.
...`,
    },
    {
      type: "table",
      title: "Cheat sheet rápida — Variables y expresiones de awk",
      headers: ["Expresión", "Significado"],
      rows: [
        ["$0", "Línea completa (el registro actual)"],
        ["$1, $2, $3", "Primer, segundo, tercer campo"],
        ["$NF", "Último campo (NF = número de campos)"],
        ["NR", "Número de registro / línea actual (global)"],
        ["NF", "Número de campos en la línea actual"],
        ["FS", "Field Separator (default: espacio/tab)"],
        ["RS", "Record Separator (default: nueva línea)"],
        ["BEGIN { }", "Código que corre ANTES de leer el archivo"],
        ["END { }", "Código que corre DESPUÉS de procesar todo"],
        ["/patrón/", "Filtrar líneas que coinciden con la regex"],
        ["!/patrón/", "Filtrar líneas que NO coinciden con la regex"],
        ["NR>1", "Saltar la primera línea (header de CSV)"],
        ["var++", "Incrementar un contador (acumulador)"],
        ["total += $11", "Acumular suma del campo 11"],
        ["printf", "Formatear salida (como en C)"],
        ["-F','", "Definir la coma como separador de campo"],
        ["-F'\\t'", "Definir tabulación como separador"],
      ],
    },
    {
      type: "curiosity",
      text: "El nombre 'awk' no es una palabra — son las iniciales de sus tres creadores: Alfred Aho, Peter Weinberger y Brian Kernighan (el mismo Kernighan coautor de 'The C Programming Language'). Fue creado en 1977 en los Laboratorios Bell de AT&T, el mismo lugar donde nacieron Unix, C, y grep. Casi 50 años después, awk sigue siendo una de las herramientas más usadas por ingenieros de datos, DevOps y administradores de sistemas. La versión GNU se llama gawk.",
    },
  ],
};

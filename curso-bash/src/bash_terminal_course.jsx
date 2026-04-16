import { useState, useMemo, useEffect } from 'react';

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════

const SECTIONS = [
  'Introducción a la terminal',
  'Archivos y directorios',
  'Búsqueda en la terminal',
  'Funcionamiento de la terminal',
  'Sistema operativo',
  'Utilidades del sistema',
  'Bonus — Trucos y consejos',
];

const PROJECT_PHASES = [
  { name: 'Setup', modules: [1, 2, 3, 4], desc: 'Instalar WSL y crear la estructura base del proyecto' },
  { name: 'Organización de datos', modules: [5, 6, 7], desc: 'Navegar, crear y inspeccionar los archivos del pipeline' },
  { name: 'Búsqueda y filtrado', modules: [8, 9], desc: 'Localizar archivos y filtrar información' },
  { name: 'Automatización', modules: [10, 11, 12, 13], desc: 'Generar reportes, encadenar comandos y crear alias' },
  { name: 'Configuración del entorno', modules: [14, 15, 16, 17], desc: 'Permisos, variables de entorno y herramientas' },
  { name: 'Ejecución de procesos', modules: [18, 19], desc: 'Correr y monitorear procesos del pipeline' },
  { name: 'Empaquetado y distribución', modules: [20, 21, 22, 23], desc: 'Comprimir, documentar, multitarea y conectividad' },
  { name: 'Personalización y cierre', modules: [24, 25, 26], desc: 'Personalizar el entorno y revisar recursos' },
];

const MODULES = [
  // ─────────────────── SECCIÓN 1 ───────────────────
  {
    id: 1, section: 0, duration: '02:07',
    title: 'Ventajas de dominar la terminal de comandos',
    summary: 'Para un ingeniero de Machine Learning o científico de datos, la terminal es tu herramienta más poderosa. Desde preparar datasets hasta entrenar modelos en servidores remotos, todo pasa por la línea de comandos. Automatizas pipelines de datos, gestionas entornos virtuales, lanzas entrenamientos en GPU y monitoreas experimentos — todo más rápido que cualquier interfaz gráfica.',
    blocks: [
      { type: 'list', title: 'Ventajas principales', items: [
        ['Velocidad y precisión', 'Operaciones que en GUI toman horas, en segundos.'],
        ['Automatización', 'Scripts que reducen tareas repetitivas a un solo comando.'],
        ['Control total', 'Sabes exactamente qué ocurre al ejecutar cada comando.'],
        ['Conocimiento profundo', 'Entiendes cómo se gestionan archivos, procesos e información.'],
        ['Herramientas de ML/DS', 'Git, Docker, conda, pip, jupyter, mlflow, dvc — todas viven en la terminal.'],
        ['Personalización extrema', 'Scripts, flujos y ambiente a medida.'],
      ]},
      { type: 'note', variant: 'info', text: 'En Machine Learning y Data Science, la terminal es inevitable: servidores de entrenamiento con GPU (AWS, GCP, Lambda Labs) solo ofrecen acceso SSH, Docker corre por CLI, y herramientas como conda, pip, dvc y mlflow viven en la terminal.' },
    ],
    activity: {
      goal: 'Preparar el terreno: tu primer comando y la configuración del proyecto.',
      steps: [
        {
          label: 'Tu primer comando',
          commands: ['echo "Mi Data Pipeline comienza hoy"'],
          hint: 'echo imprime texto en la terminal. Es la forma más simple de verificar que todo funciona.',
        },
        {
          label: 'Crear y preparar la carpeta del proyecto',
          commands: [
            'mkdir -p ~/data-pipeline',
            'cd ~/data-pipeline',
            'mv ~/Descargas/data-pipeline-archivos.zip .',
            'unzip data-pipeline-archivos.zip',
            'ls -lh',
          ],
          hint: 'En WSL la ruta de Descargas es /mnt/c/Users/TuUsuario/Downloads/',
        },
      ],
      expected: `1. echo → imprime "Mi Data Pipeline comienza hoy" en pantalla.
2. mkdir -p → crea la carpeta ~/data-pipeline (la flag -p evita error si ya existe).
3. cd → te mueve dentro de esa carpeta.
4. mv → mueve el ZIP desde Descargas hasta la carpeta actual (el punto "." significa "aquí").
5. unzip → extrae los archivos del ZIP.
6. ls -lh → lista los archivos con tamaños legibles. Deberías ver: marvel_wiki.csv, linux.txt y busqueda_terminal.txt.`,
      connection: 'Acabas de usar echo, mkdir, cd, mv, unzip y ls — seis comandos reales en tu primer módulo. En los próximos módulos profundizarás en cada uno mientras construyes un Data Pipeline completo con estos archivos.',
    },
  },
  {
    id: 2, section: 0, duration: '04:04',
    title: 'Qué es una terminal y cómo funciona con comandos básicos',
    summary: 'La terminal es la interfaz donde escribes comandos. Detrás vive un programa llamado shell (bash, zsh, fish…) que interpreta lo que escribes y lo traduce en instrucciones para el sistema operativo. En ML/Data Science, entender esta anatomía es clave: ejecutarás scripts de Python, herramientas como pip, conda, jupyter y docker — todos desde aquí.',
    blocks: [
      { type: 'table', title: 'Conceptos clave', headers: ['Concepto', 'Definición'], rows: [
        ['Terminal', 'La ventana donde escribes comandos. Intermediario visual.'],
        ['Consola', 'Interfaz física o virtual que conecta al usuario con el sistema.'],
        ['Shell', 'Intérprete de comandos. Ejemplos: bash, zsh, fish, sh.'],
        ['Comando', 'Instrucción textual que el shell ejecuta.'],
      ]},
      { type: 'code', title: 'Anatomía de un comando', code: `ls -la /home/usuario
#  │   │   └── argumento (sobre qué actuar)
#  │   └────── opciones / flags (modifican el comportamiento)
#  └────────── comando (la acción a ejecutar)` },
      { type: 'table', title: 'Shells más comunes', headers: ['Shell', 'Ruta', 'Descripción'], rows: [
        ['bash', '/bin/bash', 'Bourne Again Shell. Estándar en Linux.'],
        ['zsh', '/bin/zsh', 'Z Shell. Default en macOS. Más features.'],
        ['fish', '/usr/bin/fish', 'Friendly Interactive Shell. Autocompletado visual.'],
        ['sh', '/bin/sh', 'Bourne Shell original. Mínimo, scripts portables.'],
      ]},
      { type: 'commands', title: 'Identifica tu shell', items: [
        ['echo $SHELL', 'Qué shell estás usando ahora mismo.'],
        ['cat /etc/shells', 'Lista todas las shells disponibles en el sistema.'],
      ]},
    ],
    activity: {
      goal: 'Identificar el shell que usarás durante todo el curso.',
      commands: ['echo $SHELL', 'cat /etc/shells'],
      expected: 'Ves algo como /bin/bash o /bin/zsh. Anota tu shell: será relevante cuando configures alias permanentes.',
      connection: 'Todo el pipeline se ejecutará bajo este shell. Saber cuál es te permitirá configurarlo más adelante.',
    },
  },
  {
    id: 3, section: 0, duration: '06:53',
    title: 'Instalación de terminal Bash en Windows usando WSL',
    summary: 'Windows Subsystem for Linux (WSL) permite ejecutar Linux real dentro de Windows sin máquinas virtuales. Requiere Windows 10 2004+ o Windows 11. Incluye Ubuntu por defecto. WSL2 usa un kernel Linux real compilado por Microsoft — no es emulación.',
    blocks: [
      { type: 'code', title: 'Instalación paso a paso', code: `# 1. PowerShell como Administrador:
wsl --install
# Instala Ubuntu por defecto. Reiniciar cuando termine.

# 2. Después de reiniciar, crear usuario y contraseña UNIX

# 3. Actualizar paquetes del sistema:
sudo apt update && sudo apt upgrade -y` },
      { type: 'commands', title: 'Comandos WSL (desde PowerShell)', items: [
        ['wsl --list --verbose', 'Ver distribuciones instaladas.'],
        ['wsl --set-default Ubuntu', 'Establecer distro por defecto.'],
        ['wsl --shutdown', 'Apagar todas las instancias.'],
        ['wsl -d Ubuntu', 'Iniciar una distribución específica.'],
        ['wsl --install -d Debian', 'Instalar otra distribución.'],
        ['wsl --status', 'Ver estado del WSL.'],
      ]},
      { type: 'code', title: 'Acceso entre sistemas de archivos', code: `# Desde WSL → acceder a Windows:
ls /mnt/c/Users/
cd /mnt/d/proyectos/

# Desde Windows → acceder a WSL:
# En el Explorador: \\\\wsl$\\Ubuntu\\home\\tu_usuario` },
      { type: 'note', variant: 'tip', text: 'Dato técnico: WSL2 usa un kernel Linux real corriendo en una microVM ultraligera con Hyper-V. No es emulación — es Linux real con su propio kernel.' },
    ],
    activity: {
      goal: 'Tener WSL funcionando con Ubuntu actualizado.',
      commands: [
        'wsl --install',
        'sudo apt update && sudo apt upgrade -y',
      ],
      expected: 'Al ejecutar `wsl --list --verbose` ves Ubuntu en la lista con State Running.',
      connection: 'Este es el entorno donde vivirá tu Data Pipeline. Todos los comandos del curso se ejecutan aquí.',
    },
  },
  {
    id: 4, section: 0, duration: '09:50',
    title: 'Comandos básicos de terminal para principiantes',
    summary: 'whoami, pwd, ls y clear son los cuatro comandos que te orientan en la terminal: quién eres, dónde estás, qué hay aquí y cómo limpiar. Como data scientist, los usarás constantemente para navegar entre datasets, notebooks y ambientes de entrenamiento.',
    blocks: [
      { type: 'commands', title: 'Orientación', items: [
        ['whoami', 'Nombre de usuario activo.'],
        ['pwd', 'Print Working Directory: ¿dónde estoy?'],
        ['date', 'Fecha y hora del sistema.'],
        ['hostname', 'Nombre de la máquina.'],
      ]},
      { type: 'commands', title: 'Listar contenido', items: [
        ['ls', 'Listar archivos y carpetas.'],
        ['ls -l', 'Formato largo: permisos, dueño, tamaño, fecha.'],
        ['ls -a', 'Incluir archivos ocultos (empiezan con punto).'],
        ['ls -la', 'Combinar: largo + ocultos.'],
        ['ls -lh', 'Tamaños legibles (KB, MB, GB).'],
        ['ls -lt', 'Ordenar por fecha de modificación.'],
        ['ls -lS', 'Ordenar por tamaño.'],
      ]},
      { type: 'commands', title: 'Utilidades', items: [
        ['clear', 'Limpiar pantalla (o Ctrl+L).'],
        ['history', 'Ver historial de comandos.'],
        ['man <comando>', 'Manual completo de un comando.'],
        ['<comando> --help', 'Ayuda rápida.'],
      ]},
      { type: 'code', title: 'Leyendo ls -la', code: `drwxr-xr-x  4 usuario usuario 4096 abr 13 10:30 proyectos
-rw-r--r--  1 usuario usuario 1205 abr 13 10:30 datos.csv

# d = directorio, - = archivo, l = link simbólico
# rwx = lectura / escritura / ejecución (dueño, grupo, otros)
# Luego: links, dueño, grupo, tamaño, fecha, nombre` },
    ],
    activity: {
      goal: 'Orientarte en tu home y verificar el entorno antes de crear el proyecto.',
      commands: ['whoami', 'pwd', 'ls -la ~', 'date'],
      expected: 'Ves tu usuario, confirmas que estás en /home/<usuario>, listas los archivos ocultos y ves la hora.',
      connection: 'Confirmado el entorno, ya puedes crear con seguridad la carpeta del Data Pipeline.',
    },
  },

  // ─────────────────── SECCIÓN 2 ───────────────────
  {
    id: 5, section: 1, duration: '11:37',
    title: 'Navegación entre directorios en Linux',
    summary: 'Las rutas pueden ser absolutas (desde /) o relativas (desde tu directorio actual). Los símbolos . (aquí), .. (padre), ~ (home) y - (anterior) son tus atajos. pushd/popd te permiten mantener una pila de ubicaciones para saltar entre varios directorios.',
    blocks: [
      { type: 'table', title: 'Símbolos de navegación', headers: ['Símbolo', 'Significado', 'Ejemplo'], rows: [
        ['/', 'Raíz del sistema', 'cd /'],
        ['.', 'Directorio actual', './script.sh'],
        ['..', 'Directorio padre', 'cd ..'],
        ['~', 'Home del usuario', 'cd ~/Documents'],
        ['-', 'Directorio anterior', 'cd -'],
      ]},
      { type: 'code', title: 'Rutas absolutas vs relativas', code: `# ABSOLUTA: empieza desde la raíz /
cd /home/usuario/proyectos/data

# RELATIVA: parte del directorio actual
cd proyectos/data

# Combinando con ..
cd ../../otro_proyecto     # Subir 2 niveles y entrar` },
      { type: 'commands', title: 'Pila de directorios: pushd / popd', items: [
        ['pushd /var/log', 'Guarda ubicación actual y va a /var/log.'],
        ['pushd /etc', 'Guarda /var/log y va a /etc.'],
        ['popd', 'Vuelve a la ubicación anterior de la pila.'],
        ['dirs', 'Muestra la pila de directorios.'],
      ]},
      { type: 'code', title: 'Filesystem de Linux', code: `/                    ← Raíz absoluta
├── home/            ← Carpetas personales
│   └── usuario/     ← Tu HOME (~)
├── etc/             ← Configuración del sistema
├── var/             ← Datos variables (logs, cache)
│   └── log/         ← Logs del sistema
├── tmp/             ← Temporales
├── usr/             ← Programas y utilidades
├── bin/             ← Comandos esenciales
├── dev/             ← Dispositivos
├── proc/            ← Info del kernel
├── root/            ← Home del superusuario
└── mnt/             ← Puntos de montaje (WSL monta C:\\ aquí)` },
      { type: 'note', variant: 'tip', text: 'Autocompletado: escribe `cd Doc` y presiona TAB. Con ↑/↓ navegas el historial, y Ctrl+R lo busca.' },
    ],
    activity: {
      goal: 'Navegar a tu home y crear el directorio raíz del Data Pipeline.',
      commands: [
        'cd ~',
        'pwd',
        'mkdir data-pipeline',
        'cd data-pipeline',
        'pushd /tmp',
        'popd',
      ],
      expected: 'Terminas dentro de ~/data-pipeline después de haber saltado a /tmp y vuelto con popd.',
      connection: 'Este directorio es la raíz del proyecto. Todo lo que sigue ocurre dentro de data-pipeline.',
    },
  },
  {
    id: 6, section: 1, duration: '13:07',
    title: 'Comandos Linux para crear, mover, copiar y eliminar',
    summary: 'touch crea archivos vacíos, mkdir crea directorios (con -p crea cadenas completas), mv mueve o renombra, cp copia (con -r para directorios) y rm elimina sin papelera. La expansión de llaves permite crear múltiples carpetas o archivos en un solo comando.',
    blocks: [
      { type: 'commands', title: 'Crear', items: [
        ['touch archivo.txt', 'Crear archivo vacío.'],
        ['touch file1.txt file2.txt', 'Crear varios a la vez.'],
        ['mkdir proyecto', 'Crear un directorio.'],
        ['mkdir -p data/raw/2026/q1', 'Crear cadena completa de carpetas.'],
        ['mkdir -p proyecto/{src,tests,docs,data}', 'Estructura con expansión de llaves.'],
      ]},
      { type: 'commands', title: 'Copiar', items: [
        ['cp archivo.txt copia.txt', 'Copiar archivo.'],
        ['cp archivo.txt ~/backup/', 'Copiar a otro directorio.'],
        ['cp -r carpeta/ carpeta_backup/', '-r = recursivo (obligatorio para dirs).'],
        ['cp -i archivo.txt destino/', '-i = preguntar antes de sobreescribir.'],
        ['cp *.py scripts/', 'Copiar todos los .py.'],
        ['cp -v datos.csv backup/', '-v = verbose.'],
      ]},
      { type: 'commands', title: 'Mover y renombrar', items: [
        ['mv viejo.txt nuevo.txt', 'Renombrar.'],
        ['mv archivo.txt ~/Documents/', 'Mover a otro directorio.'],
        ['mv carpeta/ /tmp/', 'Mover carpeta completa.'],
        ['mv *.csv data/', 'Mover todos los CSV.'],
        ['mv -i origen destino', '-i = confirmar antes de sobreescribir.'],
      ]},
      { type: 'commands', title: 'Eliminar (sin papelera)', items: [
        ['rm archivo.txt', 'Eliminar archivo (irreversible).'],
        ['rm -i archivo.txt', '-i = pedir confirmación.'],
        ['rm -r carpeta/', '-r = borrar directorio y contenido.'],
        ['rm -rf carpeta/', '-rf = forzar sin preguntar.'],
        ['rmdir carpeta_vacia/', 'Solo borra directorios VACÍOS (más seguro).'],
      ]},
      { type: 'note', variant: 'warning', text: 'PELIGRO: rm NO tiene papelera. Nunca ejecutes `rm -rf /` ni `rm -rf ~`. Siempre verifica con ls antes de borrar.' },
      { type: 'note', variant: 'tip', text: 'mv dentro del mismo filesystem no mueve datos — solo actualiza la tabla de inodos. Mover 10 GB en el mismo disco es instantáneo.' },
    ],
    activity: {
      goal: 'Crear la estructura completa del Data Pipeline en un solo comando.',
      commands: [
        'cd ~/data-pipeline',
        'mkdir -p {raw,processed,reports,scripts,logs}',
        'touch scripts/process.sh scripts/analyze.sh',
        'touch reports/.gitkeep logs/.gitkeep',
        'ls -la',
      ],
      expected: 'Ves 5 directorios (raw, processed, reports, scripts, logs) y los archivos placeholder dentro.',
      connection: 'Esta es la estructura que organizará los datos crudos, procesados, reportes y los scripts que los generan.',
    },
  },
  {
    id: 7, section: 1, duration: '12:16',
    title: 'Exploración y manipulación de archivos de texto',
    summary: 'cat muestra todo el contenido, less lo navega interactivamente, head/tail ven el inicio o el final, wc cuenta líneas/palabras y awk manipula columnas de CSVs. En ciencia de datos estos comandos son esenciales: inspeccionar datasets antes de cargarlos en pandas, verificar formatos y contar registros sin abrir Python.',
    blocks: [
      { type: 'commands', title: 'cat: concatenar y mostrar', items: [
        ['cat archivo.txt', 'Mostrar todo el contenido.'],
        ['cat -n archivo.txt', 'Con números de línea.'],
        ['cat a.txt b.txt > combinado.txt', 'Concatenar y guardar.'],
        ['cat > notas.txt', 'Crear escribiendo (Ctrl+D para terminar).'],
        ['cat >> notas.txt', 'Agregar al final (append).'],
      ]},
      { type: 'commands', title: 'head: ver el inicio', items: [
        ['head archivo.csv', 'Primeras 10 líneas (default).'],
        ['head -n 5 archivo.csv', 'Primeras 5 líneas.'],
        ['head -n 1 datos.csv', 'Solo el header de un CSV.'],
        ['head -c 100 archivo.txt', 'Primeros 100 bytes.'],
      ]},
      { type: 'commands', title: 'tail: ver el final', items: [
        ['tail archivo.log', 'Últimas 10 líneas.'],
        ['tail -n 20 archivo.log', 'Últimas 20 líneas.'],
        ['tail -f /var/log/syslog', '-f = follow (tiempo real).'],
        ['tail -n +2 datos.csv', 'Desde línea 2 (saltar header).'],
      ]},
      { type: 'table', title: 'Controles dentro de less', headers: ['Tecla', 'Acción'], rows: [
        ['ESPACIO / f', 'Avanzar una página'],
        ['b', 'Retroceder una página'],
        ['g / G', 'Inicio / Final'],
        ['/patrón', 'Buscar hacia adelante'],
        ['?patrón', 'Buscar hacia atrás'],
        ['n / N', 'Siguiente / anterior resultado'],
        ['q', 'Salir'],
      ]},
      { type: 'commands', title: 'Análisis de contenido', items: [
        ['nl archivo.txt', 'Numerar líneas.'],
        ['wc archivo.txt', 'Contar líneas, palabras y caracteres.'],
        ['wc -l archivo.txt', 'Solo líneas.'],
        ['wc -w archivo.txt', 'Solo palabras.'],
        ['sort datos.txt', 'Ordenar alfabéticamente.'],
        ['sort -n numeros.txt', 'Ordenar numéricamente.'],
        ['sort -r datos.txt', 'Orden reverso.'],
        ['sort archivo | uniq', 'Ordenar y eliminar duplicados.'],
        [`awk -F"," '{print $1, $3}' archivo.csv`, 'Columnas 1 y 3 separadas por coma.'],
      ]},
      { type: 'note', variant: 'info', text: 'Dato curioso: "less is more". El comando `more` solo avanzaba; `less` lo reemplazó porque "less is more than more".' },
    ],
    activity: {
      goal: 'Crear el primer dataset de ejemplo e inspeccionarlo.',
      commands: [
        'cd ~/data-pipeline',
        `cat > raw/ventas.csv << 'EOF'
fecha,producto,cantidad,total
2026-01-01,manzanas,10,25.00
2026-01-02,naranjas,20,40.00
2026-01-03,manzanas,15,37.50
2026-01-04,peras,8,16.00
EOF`,
        'head -n 1 raw/ventas.csv',
        'tail -n +2 raw/ventas.csv',
        'wc -l raw/ventas.csv',
      ],
      expected: 'Creas ventas.csv, ves solo su header, luego todas las filas salvo el header, y finalmente un conteo de 5 líneas.',
      connection: 'Este CSV será el dataset base que filtrarás, organizarás y procesarás en los próximos módulos.',
    },
  },

  // ─────────────────── SECCIÓN 3 ───────────────────
  {
    id: 8, section: 2, duration: '09:46',
    title: 'Wildcards para búsquedas masivas',
    summary: 'Los wildcards son comodines para hacer coincidir nombres de archivos: * (cualquier cadena), ? (un carácter), [] (un carácter del conjunto), {} (expansión de llaves). Funcionan con ls, cp, mv, rm y otros — permiten operar sobre lotes de archivos.',
    blocks: [
      { type: 'table', title: 'Tipos de wildcards', headers: ['Wildcard', 'Significado', 'Ejemplo'], rows: [
        ['*', 'Cualquier cadena (0 o más caracteres)', 'ls *.py'],
        ['?', 'Exactamente un carácter', 'ls archivo?.txt'],
        ['[...]', 'Un carácter del conjunto', 'ls archivo[123].txt'],
        ['[!...]', 'Un carácter que NO está en el conjunto', 'ls archivo[!0-9].txt'],
        ['{a,b}', 'Expansión de llaves', 'mkdir {src,tests,docs}'],
      ]},
      { type: 'commands', title: 'Asterisco *', items: [
        ['ls *.csv', 'Todos los CSV.'],
        ['ls datos*', 'Todo lo que empieza con "datos".'],
        ['ls *2026*', 'Todo lo que contiene "2026".'],
        ['cp *.py scripts/', 'Copiar todos los .py.'],
        ['rm *.tmp', 'Borrar todos los temporales.'],
      ]},
      { type: 'commands', title: 'Interrogación y corchetes', items: [
        ['ls file?.txt', 'file1.txt, fileA.txt (un solo carácter).'],
        ['ls ???.py', 'Archivos .py con nombre de 3 caracteres.'],
        ['ls archivo[1-5].txt', 'archivo1 hasta archivo5.'],
        ['ls [A-Z]*.txt', 'Archivos que empiezan con mayúscula.'],
      ]},
      { type: 'commands', title: 'Llaves {}', items: [
        ['mkdir -p proyecto/{src,tests,docs,data}', 'Crear múltiples carpetas.'],
        ['touch archivo{1..10}.txt', 'Crear 10 archivos numerados.'],
        ['cp config.{yml,yml.backup}', 'Copiar renombrando.'],
        ['ls *.{md,log}', 'Archivos .md y .log.'],
      ]},
      { type: 'note', variant: 'warning', text: 'Precaución: Siempre verifica con `ls` antes de usar wildcards con rm. Un `rm *` en el directorio equivocado puede ser desastroso.' },
    ],
    activity: {
      goal: 'Organizar archivos del pipeline por tipo usando wildcards.',
      commands: [
        'cd ~/data-pipeline',
        'touch raw/ventas_{enero,febrero,marzo}.csv',
        'touch raw/notas_{1..3}.txt',
        'ls raw/*.csv',
        'ls raw/*.txt',
        'mkdir -p raw/{csv,txt}',
        'mv raw/*.csv raw/csv/ 2>/dev/null; mv raw/*.txt raw/txt/ 2>/dev/null',
        'ls -R raw/',
      ],
      expected: 'Los .csv terminan en raw/csv/ y los .txt en raw/txt/, organizados por tipo.',
      connection: 'Tu pipeline ahora tiene los datos crudos clasificados — paso previo a filtrarlos con grep.',
    },
  },
  {
    id: 9, section: 2, duration: '08:59',
    title: 'Comandos GREP y FIND para búsquedas avanzadas',
    summary: 'grep busca patrones DENTRO de archivos. find localiza archivos POR nombre, tipo, tamaño o fecha. En ML, los usarás para buscar hiperparámetros en logs de experimentos, localizar checkpoints de modelos por tamaño/fecha, y filtrar resultados masivos — habilidades que aceleran tu flujo de investigación.',
    blocks: [
      { type: 'commands', title: 'grep: buscar patrones dentro de archivos', items: [
        [`grep 'error' app.log`, 'Líneas que contienen "error".'],
        [`grep -i 'spider' datos.csv`, '-i = ignorar mayúsculas.'],
        [`grep -n 'TODO' script.py`, '-n = mostrar números de línea.'],
        [`grep -c 'error' app.log`, '-c = contar ocurrencias.'],
        [`grep -v 'debug' app.log`, '-v = invertir (líneas que NO contienen).'],
        [`grep -w 'port' config.yml`, '-w = palabra completa.'],
        [`grep -r 'import pandas' src/`, '-r = recursivo en un directorio.'],
        [`grep -E 'error|warning' app.log`, 'Regex: error O warning.'],
        [`grep -A 3 'ERROR' app.log`, '3 líneas DESPUÉS del match.'],
        [`grep -B 2 'ERROR' app.log`, '2 líneas ANTES.'],
        [`grep -C 2 'ERROR' app.log`, '2 líneas antes Y después.'],
      ]},
      { type: 'commands', title: 'find: localizar archivos', items: [
        [`find . -name "*.py"`, 'Todos los .py desde directorio actual.'],
        [`find . -iname "*.CSV"`, '-iname = ignorar mayúsculas.'],
        [`find . -type f`, 'Solo archivos.'],
        [`find . -type d`, 'Solo directorios.'],
        [`find . -size +100M`, 'Archivos mayores a 100 MB.'],
        [`find . -size -1k`, 'Archivos menores a 1 KB.'],
        [`find . -mtime -7`, 'Modificados en los últimos 7 días.'],
        [`find . -mtime +30`, 'Modificados hace más de 30 días.'],
        [`find . -empty`, 'Archivos vacíos.'],
        [`find . -name "*.tmp" -delete`, 'Encontrar y borrar.'],
        [`find . -name "*.log" -exec wc -l {} \\;`, 'Contar líneas de cada .log.'],
      ]},
      { type: 'note', variant: 'info', text: 'Las expresiones regulares son patrones que actúan como moldes. Son el lenguaje universal para buscar coincidencias en texto.' },
    ],
    activity: {
      goal: 'Filtrar ventas de "manzanas" y localizar todos los CSV del pipeline.',
      commands: [
        'cd ~/data-pipeline',
        'grep -i "manzanas" raw/csv/ventas.csv',
        'grep -c "manzanas" raw/csv/ventas.csv',
        'find . -name "*.csv"',
        'find . -type f -name "*.csv" | wc -l',
      ],
      expected: 'Ves las líneas que contienen "manzanas", cuántas son, y el total de CSVs del proyecto.',
      connection: 'Con grep y find ya puedes filtrar filas y localizar cualquier dato — habilidades clave para el análisis.',
    },
  },

  // ─────────────────── SECCIÓN 4 ───────────────────
  {
    id: 10, section: 3, duration: '05:42',
    title: 'Tipos de comandos en Linux y cómo identificarlos',
    summary: 'Un comando puede ser built-in del shell (cd, echo), un binario compilado (ls, grep), un alias o un script. type, which, whereis y whatis te dicen exactamente qué es cada uno y dónde vive.',
    blocks: [
      { type: 'table', title: 'Tipos de comandos', headers: ['Tipo', 'Descripción', 'Ejemplo'], rows: [
        ['Built-in', 'Integrados en el shell', 'cd, echo, export, alias'],
        ['Externos', 'Binarios compilados', 'ls, grep, python3'],
        ['Alias', 'Atajos personalizados', 'll → ls -la --color=auto'],
        ['Scripts', 'Archivos ejecutables', 'shell scripts, Python scripts'],
      ]},
      { type: 'commands', title: 'Identificar y ubicar', items: [
        ['type ls', "ls is aliased to 'ls --color=auto'."],
        ['type cd', 'cd is a shell builtin.'],
        ['type python3', 'python3 is /usr/bin/python3.'],
        ['which ls', '/usr/bin/ls.'],
        ['which -a python', 'Todas las ubicaciones.'],
        ['whereis ls', 'Binario, fuente y página man.'],
        ['whatis grep', 'Descripción corta de un comando.'],
        ['help cd', 'Ayuda para built-ins.'],
        ['man ls', 'Manual completo.'],
        ['info grep', 'Documentación detallada.'],
      ]},
    ],
    activity: {
      goal: 'Identificar el tipo de cada comando que estás usando en el pipeline.',
      commands: [
        'type cd',
        'type ls',
        'type grep',
        'which grep',
        'whereis bash',
      ],
      expected: 'Descubres que cd es built-in, ls y grep son binarios, y conoces dónde viven.',
      connection: 'Entender qué tipo de comando usas te ayuda a optimizar scripts y a sobreescribirlos con alias.',
    },
  },
  {
    id: 11, section: 3, duration: '11:41',
    title: 'Redirecciones de terminal en Linux',
    summary: 'Cada proceso tiene tres flujos: stdin (0), stdout (1) y stderr (2). Las redirecciones los conectan a archivos o a otros comandos. > escribe, >> agrega, | conecta, 2> captura errores, &> captura todo. En ML, redirigirás logs de entrenamiento a archivos, encadenarás preprocesamiento de datos y capturarás errores de tus scripts de Python.',
    blocks: [
      { type: 'table', title: 'File descriptors', headers: ['FD', 'Nombre', 'Default'], rows: [
        ['0', 'stdin', 'Teclado'],
        ['1', 'stdout', 'Pantalla'],
        ['2', 'stderr', 'Pantalla'],
      ]},
      { type: 'commands', title: 'Salida', items: [
        ['echo "hola" > hola.txt', '> = escribir (sobreescribe).'],
        ['echo "mundo" >> hola.txt', '>> = agregar al final.'],
        ['ls -la > listado.txt', 'Guardar salida en archivo.'],
      ]},
      { type: 'commands', title: 'Errores', items: [
        ['ls inexistente 2> errores.log', '2> = redirigir stderr.'],
        ['ls inexistente 2>> errores.log', '2>> = append de errores.'],
        ['comando &> todo.log', '&> = stdout + stderr juntos.'],
        ['comando > salida.log 2>&1', 'Alternativa clásica: todo al mismo archivo.'],
      ]},
      { type: 'commands', title: 'Entrada y pipes', items: [
        ['sort < datos.txt', '< = usar archivo como entrada.'],
        ['cat datos.csv | head -5', 'Pipe: salida como entrada del siguiente.'],
        ['history | grep git', 'Buscar git en el historial.'],
        ['cat log.txt | sort | uniq -c | sort -rn | head', 'Pipeline completo.'],
        ['comando > /dev/null 2>&1', 'Descartar toda la salida.'],
        ['comando | tee archivo', 'Guardar y mostrar al mismo tiempo.'],
      ]},
    ],
    activity: {
      goal: 'Generar el primer reporte del pipeline usando redirecciones.',
      commands: [
        'cd ~/data-pipeline',
        'ls -la raw/ > reports/estructura_raw.txt',
        'grep -i "manzanas" raw/csv/ventas.csv >> reports/manzanas.txt',
        'wc -l raw/csv/ventas.csv | tee reports/conteo_ventas.txt',
      ],
      expected: 'Tres archivos nuevos dentro de reports/: estructura_raw.txt, manzanas.txt y conteo_ventas.txt.',
      connection: 'Tu pipeline ya genera reportes reales escritos en disco — no más datos efímeros en pantalla.',
    },
  },
  {
    id: 12, section: 3, duration: '07:42',
    title: 'Operadores de control para encadenar comandos',
    summary: 'Los operadores ;, && y || encadenan comandos con distintas lógicas. ; ejecuta todo sin importar errores. && solo si el anterior tuvo éxito. || solo si el anterior falló. $? contiene el código de salida: 0 = éxito, no-cero = error.',
    blocks: [
      { type: 'commands', title: 'Operadores', items: [
        ['echo a; ls; echo b', 'Secuencial (sin importar errores).'],
        ['mkdir test && cd test', 'AND: solo entra si se creó bien.'],
        ['cd proyecto || mkdir proyecto', 'OR: si no existe, la crea.'],
        ['ls && echo OK || echo FAIL', 'Combinación típica.'],
        ['sleep 10 &', 'Background con &.'],
      ]},
      { type: 'code', title: 'Código de salida $?', code: `ls archivo_existente.txt
echo $?     # 0 = éxito

ls archivo_que_no_existe
echo $?     # 1 o 2 = error (no-zero = fallo)` },
    ],
    activity: {
      goal: 'Crear un "pipeline seguro" que solo avance si cada paso tiene éxito.',
      commands: [
        'cd ~/data-pipeline',
        'mkdir -p processed/2026 && echo "✓ carpeta creada" || echo "✗ fallo"',
        'cp raw/csv/ventas.csv processed/2026/ventas_copia.csv && echo "✓ copiado"',
        'ls processed/2026/ && echo "✓ verificado"',
      ],
      expected: 'Cada paso se ejecuta solo si el anterior fue exitoso, imprimiendo ✓ en cada confirmación.',
      connection: 'Esta es la base de cualquier script de producción: nunca avances si el paso anterior falló.',
    },
  },
  {
    id: 13, section: 3, duration: '08:31',
    title: 'Configuración de alias permanentes',
    summary: 'Los alias son apodos para comandos largos. Son temporales por defecto (solo la sesión actual). Para hacerlos permanentes se agregan al archivo de configuración del shell: ~/.bashrc para bash o ~/.zshrc para zsh. `source ~/.bashrc` recarga sin cerrar la terminal.',
    blocks: [
      { type: 'commands', title: 'Alias temporales', items: [
        [`alias ll='ls -la'`, 'Lista larga con ocultos.'],
        [`alias cls='clear'`, 'Apodo estilo DOS.'],
        [`alias ..='cd ..'`, 'Subir un nivel.'],
        [`alias gs='git status'`, 'Atajo de git status.'],
        ['alias', 'Ver todos los alias activos.'],
        ['unalias ll', 'Eliminar un alias (solo esta sesión).'],
      ]},
      { type: 'code', title: 'Alias permanentes', code: `# 1. Identificar tu shell:
echo $SHELL

# 2. Editar el archivo de configuración:
nano ~/.bashrc          # Para bash
nano ~/.zshrc           # Para zsh

# 3. Agregar al final:
alias ll='ls -la --color=auto'
alias grep='grep --color=auto'
alias update='sudo apt update && sudo apt upgrade -y'

# 4. También con redirección:
echo "alias cls='clear'" >> ~/.bashrc

# 5. Recargar sin cerrar la terminal:
source ~/.bashrc` },
    ],
    activity: {
      goal: 'Crear alias que apunten directamente al proyecto.',
      commands: [
        `echo "alias dp='cd ~/data-pipeline'" >> ~/.bashrc`,
        `echo "alias dpls='ls -la ~/data-pipeline'" >> ~/.bashrc`,
        `echo "alias dpreport='cat ~/data-pipeline/reports/*.txt'" >> ~/.bashrc`,
        'source ~/.bashrc',
        'alias | grep dp',
      ],
      expected: 'Al teclear `dp` saltas al proyecto, con `dpls` ves su estructura, y con `dpreport` lees los reportes.',
      connection: 'Estos alias convierten tres comandos frecuentes en atajos de dos letras — ganas velocidad real.',
    },
  },

  // ─────────────────── SECCIÓN 5 ───────────────────
  {
    id: 14, section: 4, duration: '12:54',
    title: 'Gestión de permisos en archivos y directorios',
    summary: 'Los permisos en Linux tienen tres acciones (r, w, x) aplicadas a tres grupos (dueño, grupo, otros). Se asignan con chmod usando notación numérica (7=rwx, 5=rx, 4=r) o simbólica (u+x, g-w). chown cambia dueño, chgrp cambia grupo. 755 para scripts ejecutables, 644 para archivos normales, 600 para llaves SSH.',
    blocks: [
      { type: 'code', title: 'Estructura de permisos', code: `-rwxr-xr-x  1  usuario  devs  4096  abr 13  script.sh
 │├─┤├─┤├─┤
 │ │   │  └── Otros (o)
 │ │   └───── Grupo (g)
 │ └───────── Dueño (u)
 └─────────── Tipo: - archivo, d directorio, l link` },
      { type: 'table', title: 'Permisos y valores', headers: ['Permiso', 'Letra', 'Valor', 'En archivos', 'En directorios'], rows: [
        ['Lectura', 'r', '4', 'Ver contenido', 'Listar contenido'],
        ['Escritura', 'w', '2', 'Modificar', 'Crear/eliminar dentro'],
        ['Ejecución', 'x', '1', 'Ejecutar como programa', 'Entrar al directorio'],
      ]},
      { type: 'code', title: 'Notación numérica', code: `rwx = 4+2+1 = 7    rw- = 4+2+0 = 6    r-x = 4+0+1 = 5
r-- = 4+0+0 = 4    --- = 0+0+0 = 0

chmod 755 script.sh      # rwxr-xr-x
chmod 644 archivo.txt    # rw-r--r--
chmod 700 privado/       # rwx------
chmod 600 .ssh/id_rsa    # rw------- (clave SSH)` },
      { type: 'commands', title: 'Simbólica y dueños', items: [
        ['chmod u+x script.sh', 'Agregar ejecución al dueño.'],
        ['chmod g+w archivo.txt', 'Agregar escritura al grupo.'],
        ['chmod a+r archivo.txt', 'Lectura para todos.'],
        ['chmod -R 755 directorio/', 'Recursivo.'],
        ['sudo chown usuario archivo.txt', 'Cambiar dueño.'],
        ['sudo chown usuario:devs archivo.txt', 'Dueño y grupo.'],
        ['sudo chgrp devs archivo.txt', 'Solo grupo.'],
      ]},
      { type: 'note', variant: 'warning', text: '777 = rwx para todo el mundo. Casi siempre es un error de seguridad. Mantén permisos al mínimo necesario.' },
    ],
    activity: {
      goal: 'Hacer ejecutables los scripts del pipeline.',
      commands: [
        'cd ~/data-pipeline',
        `echo '#!/bin/bash\necho "procesando ventas..."' > scripts/process.sh`,
        'chmod 755 scripts/process.sh',
        'ls -l scripts/process.sh',
        './scripts/process.sh',
      ],
      expected: 'Ves -rwxr-xr-x en los permisos de process.sh y el script imprime el mensaje al ejecutarlo.',
      connection: 'Los scripts del pipeline ahora pueden correr. Siguiente paso: configurarles variables de entorno.',
    },
  },
  {
    id: 15, section: 4, duration: '08:27',
    title: 'Variables de entorno',
    summary: 'Las variables de entorno almacenan datos accesibles para programas y scripts. En ML/Data Science son críticas: CUDA_VISIBLE_DEVICES selecciona GPUs, PYTHONPATH configura módulos, WANDB_API_KEY conecta con trackers de experimentos. Dominarlas es la diferencia entre un entorno reproducible y el caos.',
    blocks: [
      { type: 'commands', title: 'Crear y usar', items: [
        ['MI_VAR="hola"', 'Variable local (solo esta sesión).'],
        ['echo $MI_VAR', 'Imprimir su valor.'],
        ['export MI_VAR="hola"', 'Global (heredada por procesos hijos).'],
        ['export PATH="$PATH:/mi/ruta/bin"', 'Extender el PATH.'],
        ['unset MI_VAR', 'Eliminar variable.'],
      ]},
      { type: 'commands', title: 'Variables del sistema', items: [
        ['echo $HOME', '/home/usuario.'],
        ['echo $USER', 'Tu usuario actual.'],
        ['echo $SHELL', 'Shell en uso.'],
        ['echo $PATH', 'Directorios donde buscar ejecutables.'],
        ['echo $PWD', 'Directorio actual.'],
        ['echo $?', 'Código de salida del último comando.'],
        ['env', 'Ver TODAS las variables.'],
        ['printenv', 'Igual que env.'],
      ]},
      { type: 'table', title: 'Variables importantes', headers: ['Variable', 'Descripción'], rows: [
        ['$HOME', 'Directorio personal'],
        ['$PATH', 'Rutas donde buscar ejecutables'],
        ['$USER', 'Usuario actual'],
        ['$SHELL', 'Shell en uso'],
        ['$EDITOR', 'Editor por defecto'],
        ['$LANG', 'Idioma del sistema'],
        ['$PS1', 'Formato del prompt'],
        ['$$', 'PID del proceso actual'],
        ['$?', 'Código de salida del último comando'],
      ]},
    ],
    activity: {
      goal: 'Crear variables de entorno que apuntan a las rutas del pipeline.',
      commands: [
        'export DP_ROOT=~/data-pipeline',
        'export DP_RAW=$DP_ROOT/raw',
        'export DP_REPORTS=$DP_ROOT/reports',
        'echo $DP_RAW',
        'ls $DP_REPORTS',
      ],
      expected: 'Puedes listar reports/ usando $DP_REPORTS sin tener que escribir la ruta completa.',
      connection: 'Tus scripts del pipeline podrán referirse a $DP_RAW y $DP_REPORTS en lugar de hardcodear rutas.',
    },
  },
  {
    id: 16, section: 4, duration: '07:37',
    title: 'Gestión de paquetes con APT',
    summary: 'APT gestiona software en Debian/Ubuntu. Actualizar son dos pasos: `apt update` refresca la lista de paquetes, `apt upgrade` actualiza los instalados. Siempre con sudo. Otras distros usan DNF (Red Hat), Pacman (Arch) o Homebrew (macOS).',
    blocks: [
      { type: 'commands', title: 'Actualizar', items: [
        ['sudo apt update', 'Actualizar lista de paquetes.'],
        ['sudo apt upgrade -y', 'Actualizar los instalados.'],
        ['sudo apt full-upgrade', 'Upgrade agresivo.'],
      ]},
      { type: 'commands', title: 'Instalar y eliminar', items: [
        ['sudo apt install htop', 'Instalar un paquete.'],
        ['sudo apt install git curl wget', 'Instalar varios.'],
        ['sudo apt remove paquete', 'Eliminar (mantiene config).'],
        ['sudo apt purge paquete', 'Eliminar + configuración.'],
        ['sudo apt autoremove', 'Eliminar dependencias huérfanas.'],
      ]},
      { type: 'commands', title: 'Información', items: [
        ['apt search "editor"', 'Buscar paquetes.'],
        ['apt show htop', 'Información detallada.'],
        ['apt list --installed', 'Listar instalados.'],
        ['apt list --upgradeable', 'Listar con actualizaciones pendientes.'],
      ]},
      { type: 'table', title: 'Gestores por distribución', headers: ['Distro', 'Gestor', 'Ejemplo'], rows: [
        ['Debian/Ubuntu', 'APT', 'apt install'],
        ['Red Hat/Fedora', 'DNF/Yum', 'dnf install'],
        ['Arch Linux', 'Pacman', 'pacman -S'],
        ['macOS', 'Homebrew', 'brew install'],
      ]},
    ],
    activity: {
      goal: 'Instalar las herramientas que tu pipeline necesita.',
      commands: [
        'sudo apt update',
        'sudo apt install -y htop jq tree',
        'tree ~/data-pipeline -L 2',
      ],
      expected: 'Ves el árbol del proyecto renderizado visualmente gracias a tree.',
      connection: 'htop monitoreará los procesos del pipeline, jq procesará JSON y tree mostrará la estructura.',
    },
  },
  {
    id: 17, section: 4, duration: '07:22',
    title: 'Homebrew en macOS',
    summary: 'Homebrew es "el manejador de paquetes perdido de macOS". Permite instalar software por terminal con comandos muy parecidos a APT. Apps gráficas se instalan con `brew install --cask`.',
    blocks: [
      { type: 'code', title: 'Instalación', code: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew --version` },
      { type: 'commands', title: 'Gestionar paquetes', items: [
        ['brew search nombre', 'Buscar paquete.'],
        ['brew info nombre', 'Información detallada.'],
        ['brew install neofetch', 'Instalar.'],
        ['brew uninstall neofetch', 'Desinstalar.'],
        ['brew list', 'Listar instalados.'],
        ['brew update', 'Actualizar Homebrew.'],
        ['brew upgrade', 'Actualizar todos los paquetes.'],
        ['brew cleanup', 'Limpiar versiones antiguas.'],
        ['brew doctor', 'Diagnóstico.'],
      ]},
      { type: 'commands', title: 'Apps gráficas (Cask)', items: [
        ['brew install --cask visual-studio-code', 'Instalar VS Code.'],
        ['brew install --cask firefox', 'Instalar Firefox.'],
        ['brew install --cask warp', 'Instalar Warp terminal.'],
      ]},
      { type: 'note', variant: 'info', text: 'Homebrew no es oficial de Apple. Verifica siempre las fuentes de los paquetes que instalas.' },
    ],
    activity: {
      goal: 'Si usas macOS: instalar las mismas herramientas del pipeline con Homebrew.',
      commands: [
        'brew install htop jq tree',
        'tree ~/data-pipeline -L 2',
      ],
      expected: 'Las mismas herramientas disponibles vía Homebrew, funcionando idénticamente al APT.',
      connection: 'Un pipeline portable debe correr en Linux y macOS — saber ambos gestores es esencial.',
    },
  },
  {
    id: 18, section: 4, duration: '06:40',
    title: 'Procesos en foreground y background',
    summary: 'Los procesos en foreground bloquean la terminal. Los de background corren sin bloquear y se lanzan con & al final. Esto es fundamental en ML: lanzar entrenamientos largos con nohup o &, pausar un proceso con Ctrl+Z para inspeccionar métricas, y manejar múltiples experimentos simultáneos.',
    blocks: [
      { type: 'commands', title: 'Ejecución y control', items: [
        ['sleep 30', 'Foreground: bloquea 30 segundos.'],
        ['sleep 30 &', 'Background: & al final.'],
        ['sleep 1000 && echo listo &', 'Pipeline completo en background.'],
        ['jobs', 'Ver procesos suspendidos y en background.'],
        ['fg', 'Traer el último a foreground.'],
        ['fg %1', 'Traer job #1 a foreground.'],
        ['bg', 'Reanudar el último en background.'],
        ['nohup comando &', 'Sigue corriendo al cerrar terminal.'],
      ]},
      { type: 'table', title: 'Atajos de control', headers: ['Atajo', 'Acción'], rows: [
        ['Ctrl + C', 'Cancelar proceso actual'],
        ['Ctrl + Z', 'Suspender (pausar) proceso'],
        ['Ctrl + D', 'EOF / Cerrar sesión'],
      ]},
    ],
    activity: {
      goal: 'Lanzar el script de procesamiento en background.',
      commands: [
        'cd ~/data-pipeline',
        `echo '#!/bin/bash\nfor i in {1..5}; do echo "paso $i" >> logs/run.log; sleep 2; done' > scripts/process.sh`,
        'chmod +x scripts/process.sh',
        './scripts/process.sh &',
        'jobs',
        'tail -f logs/run.log',
      ],
      expected: 'El script corre en background y tail muestra los pasos en tiempo real hasta completar.',
      connection: 'En producción, los pipelines largos se lanzan en background. jobs y tail -f son el binomio de observabilidad.',
    },
  },
  {
    id: 19, section: 4, duration: '13:02',
    title: 'Administración de procesos con PS, Top y Kill',
    summary: 'ps saca una foto de los procesos activos. top y htop los muestran en tiempo real. En entornos de ML, monitorear GPU/CPU durante entrenamientos (nvidia-smi, htop) y matar procesos que consumen demasiada memoria es parte del día a día. kill, pgrep y pidof son tus herramientas.',
    blocks: [
      { type: 'commands', title: 'ps: snapshot de procesos', items: [
        ['ps', 'Procesos del terminal actual.'],
        ['ps aux', 'TODOS los procesos del sistema.'],
        ['ps aux | grep python', 'Filtrar por nombre.'],
        ['ps -ef', 'Formato estándar completo.'],
        ['ps aux --sort=-%mem | head', 'Top por memoria.'],
        ['ps aux --sort=-%cpu | head', 'Top por CPU.'],
      ]},
      { type: 'commands', title: 'top y htop', items: [
        ['top', 'Monitor en tiempo real.'],
        ['htop', 'Monitor visual mejorado.'],
        ['pgrep nombre', 'PID por nombre.'],
        ['pidof proceso', 'PID de un proceso.'],
      ]},
      { type: 'commands', title: 'kill: terminar procesos', items: [
        ['kill PID', 'SIGTERM (terminar limpiamente).'],
        ['kill -9 PID', 'SIGKILL (forzar).'],
        ['kill -STOP PID', 'Pausar.'],
        ['kill -CONT PID', 'Reanudar.'],
        ['killall nombre', 'Matar todos por nombre.'],
        ['pkill nombre', 'Similar a killall.'],
      ]},
      { type: 'table', title: 'Señales importantes', headers: ['Señal', 'Número', 'Descripción'], rows: [
        ['SIGTERM', '15', 'Terminar limpiamente (default)'],
        ['SIGKILL', '9', 'Matar inmediatamente (no se puede ignorar)'],
        ['SIGSTOP', '19', 'Pausar'],
        ['SIGCONT', '18', 'Continuar'],
      ]},
    ],
    activity: {
      goal: 'Monitorear y, si hace falta, matar el proceso del pipeline.',
      commands: [
        './scripts/process.sh &',
        'ps aux | grep process.sh',
        'pgrep -f process.sh',
        'htop',
        '# kill <PID>   # si necesitas detenerlo',
      ],
      expected: 'Ves el PID de process.sh y puedes observarlo vivo en htop.',
      connection: 'Observabilidad + capacidad de matar procesos atascados = pipeline confiable.',
    },
  },

  // ─────────────────── SECCIÓN 6 ───────────────────
  {
    id: 20, section: 5, duration: '07:39',
    title: 'Empaquetado y compresión con TAR y GZIP',
    summary: 'Empaquetar (reunir archivos) y comprimir (reducir tamaño) son procesos distintos. tar empaqueta, gzip comprime. El combo más usado es tar -czvf (crear .tar.gz) y tar -xzvf (extraer). bzip2 comprime más pero es más lento. zip es compatible con Windows.',
    blocks: [
      { type: 'commands', title: 'tar — empaquetado', items: [
        ['tar -cvf textos.tar textos/', 'c=crear, v=verbose, f=archivo.'],
        ['tar -cvf backup.tar *.py', 'Empaquetar todos los .py.'],
        ['tar -xvf textos.tar', 'x=extraer.'],
        ['tar -xvf archivo.tar -C /destino/', 'Extraer en otro directorio.'],
        ['tar -tvf archivo.tar', 'Ver contenido sin extraer.'],
      ]},
      { type: 'commands', title: 'gzip — compresión', items: [
        ['gzip archivo.txt', 'Comprime → archivo.txt.gz (borra original).'],
        ['gunzip archivo.txt.gz', 'Descomprime.'],
        ['gzip -k archivo.txt', '-k = mantener original.'],
        ['gzip -d archivo.txt.gz', '-d = decompress.'],
      ]},
      { type: 'commands', title: 'tar + gzip (lo más común)', items: [
        ['tar -czvf backup.tar.gz carpeta/', 'Crear .tar.gz.'],
        ['tar -xzvf backup.tar.gz', 'Extraer .tar.gz.'],
        ['tar -xzvf backup.tar.gz -C /destino/', 'Extraer en otro directorio.'],
        ['tar -tzvf backup.tar.gz', 'Listar contenido de .tar.gz.'],
        ['tar -cjvf backup.tar.bz2 carpeta/', 'bzip2: mejor compresión, más lento.'],
      ]},
      { type: 'commands', title: 'zip (Windows)', items: [
        ['zip -r backup.zip carpeta/', 'Crear zip.'],
        ['unzip backup.zip', 'Extraer.'],
        ['unzip -l backup.zip', 'Listar contenido.'],
      ]},
    ],
    activity: {
      goal: 'Comprimir los reportes del pipeline para distribuirlos.',
      commands: [
        'cd ~/data-pipeline',
        'tar -czvf reports_$(date +%Y%m%d).tar.gz reports/',
        'ls *.tar.gz',
        'tar -tzvf reports_*.tar.gz',
      ],
      expected: 'Se crea un archivo reports_YYYYMMDD.tar.gz y puedes inspeccionar su contenido sin extraerlo.',
      connection: 'Tu pipeline ya puede empaquetar sus resultados listos para enviar por email o subir a un bucket.',
    },
  },
  {
    id: 21, section: 5, duration: '10:20',
    title: 'Editores de texto Vim y Nano',
    summary: 'Nano es simple: atajos con Ctrl y listo. Vim es potente pero tiene curva: funciona por modos (normal, insertar, comando). En vim, i entra a insertar, ESC vuelve a normal, :wq guarda y sale, :q! sale sin guardar. dd borra línea, yy copia, p pega.',
    blocks: [
      { type: 'commands', title: 'Nano (sencillo)', items: [
        ['nano archivo.txt', 'Abrir editor.'],
        ['Ctrl + O', 'Guardar.'],
        ['Ctrl + X', 'Salir.'],
        ['Ctrl + K', 'Cortar línea.'],
        ['Ctrl + U', 'Pegar.'],
        ['Ctrl + W', 'Buscar.'],
        ['Ctrl + \\', 'Buscar y reemplazar.'],
        ['Alt + U', 'Deshacer.'],
      ]},
      { type: 'table', title: 'Modos de Vim', headers: ['Modo', 'Cómo entrar', 'Para qué'], rows: [
        ['Normal', 'ESC', 'Navegar, copiar, borrar, comandos'],
        ['Insertar', 'i', 'Escribir texto'],
        ['Visual', 'v', 'Seleccionar texto'],
        ['Comando', ':', 'Guardar, salir, buscar'],
      ]},
      { type: 'code', title: 'Vim: comandos esenciales', code: `# Modo Normal:
i             Entrar a modo insertar
a             Insertar después del cursor
o             Nueva línea debajo e insertar
ESC           Volver a modo normal

# Comandos (:)
:w            Guardar
:q            Salir
:wq           Guardar y salir
:q!           Salir sin guardar (forzar)
:4            Ir a la línea 4

# Navegación
h j k l       ← ↓ ↑ →
gg            Inicio del archivo
G             Final del archivo
0             Inicio de la línea
$             Final de la línea

# Edición
dd            Borrar línea
yy            Copiar línea
p             Pegar
u             Deshacer
Ctrl + R      Rehacer
/patrón       Buscar
n             Siguiente resultado` },
    ],
    activity: {
      goal: 'Escribir el README del pipeline usando nano o vim.',
      commands: [
        'cd ~/data-pipeline',
        'nano README.md',
        '# Escribe: # Data Pipeline',
        '# nano: Ctrl+O, Enter, Ctrl+X',
        '# vim: i, escribir, ESC, :wq',
        'cat README.md',
      ],
      expected: 'El archivo README.md existe con el contenido que escribiste.',
      connection: 'Todo pipeline serio necesita documentación viva. Ahora sabes editarla sin salir de la terminal.',
    },
  },
  {
    id: 22, section: 5, duration: '08:42',
    title: 'Tmux para múltiples terminales',
    summary: 'tmux permite tener múltiples ventanas y paneles en una sola terminal, y mantener sesiones vivas aunque cierres la terminal. Indispensable en ML: lanzas un entrenamiento en un panel, monitoreas nvidia-smi en otro, y editas hiperparámetros en un tercero — todo sin perder nada al desconectarte del servidor.',
    blocks: [
      { type: 'commands', title: 'Iniciar y gestionar sesiones', items: [
        ['sudo apt install tmux', 'Instalar en Linux.'],
        ['tmux', 'Nueva sesión sin nombre.'],
        ['tmux new -s pipeline', 'Sesión con nombre "pipeline".'],
        ['tmux ls', 'Listar sesiones activas.'],
        ['tmux attach -t pipeline', 'Reconectarse.'],
        ['tmux kill-session -t pipeline', 'Matar sesión.'],
      ]},
      { type: 'table', title: 'Atajos (prefijo Ctrl+b luego la tecla)', headers: ['Acción', 'Atajo'], rows: [
        ['Desconectarse', 'Ctrl+b → d'],
        ['Nueva ventana', 'Ctrl+b → c'],
        ['Siguiente ventana', 'Ctrl+b → n'],
        ['Anterior ventana', 'Ctrl+b → p'],
        ['Listar ventanas', 'Ctrl+b → w'],
        ['Renombrar ventana', 'Ctrl+b → ,'],
        ['Dividir vertical', 'Ctrl+b → %'],
        ['Dividir horizontal', 'Ctrl+b → "'],
        ['Moverse entre paneles', 'Ctrl+b → flechas'],
        ['Zoom panel', 'Ctrl+b → z'],
      ]},
      { type: 'note', variant: 'tip', text: 'Caso de uso: lanzas un proceso largo dentro de tmux, Ctrl+b → d para desconectar, cierras la terminal. Vuelves con `tmux attach` y el proceso sigue corriendo.' },
    ],
    activity: {
      goal: 'Ejecutar el pipeline en una sesión tmux con múltiples paneles.',
      commands: [
        'tmux new -s pipeline',
        'cd ~/data-pipeline',
        '# Ctrl+b % → split vertical',
        '# Izquierda: ./scripts/process.sh',
        '# Derecha: tail -f logs/run.log',
        '# Ctrl+b d → desconectar',
        'tmux attach -t pipeline',
      ],
      expected: 'Tienes dos paneles: uno corriendo el pipeline, otro mostrando los logs. Puedes desconectarte y volver.',
      connection: 'Así es como los equipos operan pipelines largos en servidores remotos por SSH — tmux es parte del stack profesional.',
    },
  },
  {
    id: 23, section: 5, duration: '12:02',
    title: 'Comandos de red',
    summary: 'ip a muestra tus interfaces. ping verifica conectividad. curl hace peticiones HTTP (útil para APIs de ML como OpenAI o HuggingFace). wget descarga datasets y modelos preentrenados. ssh te conecta a servidores de entrenamiento con GPU, scp transfiere datasets y checkpoints entre máquinas.',
    blocks: [
      { type: 'commands', title: 'Información de red', items: [
        ['ip a', 'Interfaces y direcciones IP.'],
        ['ip r', 'Tabla de rutas.'],
        ['hostname -I', 'Tu IP local.'],
        ['ifconfig', 'Info de interfaces (legacy pero funciona).'],
      ]},
      { type: 'commands', title: 'Conectividad', items: [
        ['ping www.google.com', 'Verificar conectividad (Ctrl+C para parar).'],
        ['ping -c 4 www.google.com', 'Solo 4 pings.'],
        ['traceroute google.com', 'Rastrear ruta de paquetes.'],
      ]},
      { type: 'commands', title: 'HTTP y descargas', items: [
        ['curl www.google.com', 'GET HTTP (imprime HTML).'],
        ['curl -O url', 'Descargar manteniendo nombre.'],
        ['curl -I https://ejemplo.com', 'Solo headers.'],
        ['wget https://ejemplo.com/archivo.zip', 'Descargar archivo.'],
        ['wget -c url', '-c = continuar descarga interrumpida.'],
      ]},
      { type: 'commands', title: 'DNS y puertos', items: [
        ['nslookup google.com', 'Resolver DNS.'],
        ['dig google.com', 'Info DNS detallada.'],
        ['netstat -tuln', 'Puertos abiertos.'],
        ['ss -tuln', 'Alternativa moderna a netstat.'],
        ['nmap host', 'Escanear puertos.'],
      ]},
      { type: 'commands', title: 'SSH', items: [
        ['ssh usuario@host', 'Conectar a servidor remoto.'],
        ['scp archivo usuario@host:/ruta', 'Copiar archivo por SSH.'],
      ]},
    ],
    activity: {
      goal: 'Verificar conectividad y descargar un dataset adicional.',
      commands: [
        'ping -c 4 www.google.com',
        'curl -I https://www.google.com',
        'cd ~/data-pipeline/raw',
        'curl -o sample.csv https://raw.githubusercontent.com/datasets/gdp/master/data/gdp.csv',
        'head sample.csv',
      ],
      expected: 'Confirmas red, obtienes headers HTTP y descargas un CSV real al pipeline.',
      connection: 'Un pipeline real casi siempre ingiere datos desde internet. curl y wget son el punto de entrada.',
    },
  },

  // ─────────────────── SECCIÓN 7 ───────────────────
  {
    id: 24, section: 6, duration: '10:51',
    title: 'Personalización con ZSH y temas avanzados',
    summary: 'ZSH es una alternativa a bash con autocompletado más inteligente, plugins y temas. Oh My Zsh es un framework que añade temas, autocompletado y plugins. Powerlevel10k es un tema avanzado que muestra git, hora, SO y más — requiere la fuente Meslo NerdFont.',
    blocks: [
      { type: 'code', title: 'Instalar ZSH y Oh My Zsh', code: `# ZSH:
sudo apt install zsh
chsh -s $(which zsh)

# Oh My Zsh:
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` },
      { type: 'code', title: 'Configuración ~/.zshrc', code: `# Tema:
ZSH_THEME="agnoster"
# Opciones: robbyrussell, bira, fino, powerlevel10k

# Plugins:
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  z
  docker
)

source ~/.zshrc` },
      { type: 'code', title: 'Plugins populares', code: `git clone https://github.com/zsh-users/zsh-autosuggestions \\
  \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting \\
  \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting` },
      { type: 'code', title: 'Powerlevel10k', code: `# 1. Instalar fuente Meslo NerdFont
# 2. Clonar tema:
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \\
  \${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# 3. En ~/.zshrc:
ZSH_THEME="powerlevel10k/powerlevel10k"

# 4. Aplicar:
source ~/.zshrc
p10k configure` },
    ],
    activity: {
      goal: 'Dar una terminal personalizada al entorno donde vive tu pipeline.',
      commands: [
        'sudo apt install zsh',
        'sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
        'chsh -s $(which zsh)',
        'echo $SHELL',
      ],
      expected: 'El prompt luce diferente y $SHELL imprime /usr/bin/zsh.',
      connection: 'El entorno del pipeline ahora es tuyo. Alias, colores y autocompletado te ahorran segundos en cada comando.',
    },
  },
  {
    id: 25, section: 6, duration: '08:06',
    title: 'Warp: terminal con inteligencia artificial',
    summary: 'Warp es una terminal moderna con IA integrada. Permite describir comandos en lenguaje natural, agrupar ejecuciones en bloques visuales, crear workflows reutilizables y corregir errores con ayuda de IA. Disponible para macOS, Linux y Windows (via WSL).',
    blocks: [
      { type: 'list', title: 'Características', items: [
        ['Bloques de comandos', 'Cada ejecución se agrupa visualmente para fácil navegación.'],
        ['Autocompletado con IA', 'Sugerencias contextuales mientras escribes.'],
        ['Lenguaje natural', 'Describe lo que quieres hacer y Warp propone el comando.'],
        ['Workflows', 'Plantillas reutilizables de secuencias de comandos.'],
        ['Corrección de errores', 'IA explica qué falló y cómo arreglarlo.'],
        ['Split panels', 'División nativa para multitasking.'],
      ]},
      { type: 'code', title: 'Instalación', code: `# macOS:
brew install --cask warp

# Windows/Linux:
# Descargar desde https://www.warp.dev/` },
    ],
    activity: {
      goal: 'Probar una terminal con IA integrada (opcional pero recomendado).',
      commands: [
        'brew install --cask warp',
        '# En Warp, describe en lenguaje natural:',
        '# "list all csv files in my data-pipeline folder sorted by size"',
      ],
      expected: 'Warp sugiere el comando correcto y lo ejecuta como un bloque visual.',
      connection: 'La IA en el loop no reemplaza saber terminal — la amplifica. Ahora entiendes qué hace cada sugerencia.',
    },
  },
  {
    id: 26, section: 6, duration: '02:19',
    title: 'Recursos complementarios',
    summary: 'Dominar la terminal requiere repetición. Los recursos recomendados son libros, plataformas de ejercicios interactivos y juegos. La cheat sheet que viene en la siguiente pestaña es tu referencia rápida permanente.',
    blocks: [
      { type: 'list', title: 'Recursos recomendados', items: [
        ['Linux Journey', 'https://linuxjourney.com — Ejercicios interactivos gratuitos.'],
        ['OverTheWire Bandit', 'https://overthewire.org/wargames/bandit/ — Juego para aprender terminal.'],
        ['Explainshell', 'https://explainshell.com — Explica comandos complejos visualmente.'],
        ['tldr pages', 'sudo apt install tldr → tldr tar. Manuales simplificados.'],
        ['Linux Basic for Hackers', 'Libro gratuito y open source.'],
        ['Linux Bible', 'Libro extenso, de pago.'],
      ]},
      { type: 'note', variant: 'info', text: 'La clave es la repetición: usar la terminal todos los días, aunque sea para tareas pequeñas. En un mes notarás la diferencia.' },
    ],
    activity: {
      goal: 'Cerrar el pipeline: empaquetarlo, documentarlo y comprometerse a usar la terminal diariamente.',
      commands: [
        'cd ~',
        'tar -czvf data-pipeline_final.tar.gz data-pipeline/',
        'ls -lh data-pipeline_final.tar.gz',
        'echo "Pipeline completo. A partir de hoy, un comando nuevo cada día."',
      ],
      expected: 'Tienes un .tar.gz final con todo el proyecto y un compromiso explícito con la práctica diaria.',
      connection: 'Has recorrido los 26 módulos y construido un pipeline funcional. Ahora la terminal es parte de tu flujo.',
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// CHEAT SHEET
// ═══════════════════════════════════════════════════════════════════════════

const CHEAT_SHEET = [
  { category: 'Navegación', items: [
    ['pwd', 'Directorio actual'],
    ['ls', 'Listar archivos'],
    ['ls -la', 'Listar con detalles y ocultos'],
    ['ls -lh', 'Tamaños legibles'],
    ['ls -lt', 'Ordenar por fecha'],
    ['cd dir', 'Entrar al directorio'],
    ['cd ..', 'Subir un nivel'],
    ['cd ~', 'Ir al home'],
    ['cd -', 'Directorio anterior'],
    ['cd /', 'Ir a la raíz'],
    ['pushd dir', 'Apilar y saltar a dir'],
    ['popd', 'Volver al anterior de la pila'],
    ['dirs', 'Ver la pila de directorios'],
  ]},
  { category: 'Archivos y directorios', items: [
    ['touch archivo.txt', 'Crear archivo vacío'],
    ['mkdir dir', 'Crear directorio'],
    ['mkdir -p a/b/c', 'Crear cadena de directorios'],
    ['mkdir -p p/{src,tests,docs}', 'Expansión de llaves'],
    ['cp archivo destino', 'Copiar archivo'],
    ['cp -r dir/ destino/', 'Copiar directorio'],
    ['cp -p archivo destino', 'Copiar preservando permisos'],
    ['cp -i origen destino', 'Confirmar antes de sobreescribir'],
    ['cp -v origen destino', 'Verbose'],
    ['mv origen destino', 'Mover / renombrar'],
    ['rm archivo', 'Eliminar archivo'],
    ['rm -rf dir/', 'Eliminar directorio recursivo'],
    ['rmdir dir', 'Eliminar directorio vacío'],
  ]},
  { category: 'Búsqueda', items: [
    ['find /ruta -name "*.txt"', 'Buscar por nombre'],
    ['find . -iname "*.CSV"', 'Ignorar mayúsculas'],
    ['find . -type f', 'Solo archivos'],
    ['find . -type d', 'Solo directorios'],
    ['find . -size +100M', 'Mayores a 100 MB'],
    ['find . -size -1k', 'Menores a 1 KB'],
    ['find . -mtime -7', 'Modificados en 7 días'],
    ['find . -empty', 'Archivos vacíos'],
    ['find . -name "*.tmp" -delete', 'Encontrar y borrar'],
    ['locate archivo', 'Buscar en base de datos del sistema'],
    ['which comando', 'Ubicación de comando'],
    ['whereis comando', 'Todas las ubicaciones'],
    ['type comando', 'Identificar tipo de comando'],
    ['whatis comando', 'Descripción corta'],
  ]},
  { category: 'Visualización de texto', items: [
    ['cat archivo', 'Mostrar todo'],
    ['cat -n archivo', 'Con números de línea'],
    ['less archivo', 'Navegar interactivamente'],
    ['head -n 20 archivo', 'Primeras 20 líneas'],
    ['tail -n 50 archivo', 'Últimas 50 líneas'],
    ['tail -f archivo', 'Seguir en tiempo real'],
    ['tail -n +2 archivo', 'Desde línea 2'],
    ['wc archivo', 'Líneas, palabras, caracteres'],
    ['wc -l archivo', 'Solo líneas'],
    ['wc -w archivo', 'Solo palabras'],
    ['sort archivo', 'Ordenar'],
    ['sort -n archivo', 'Numéricamente'],
    ['sort -r archivo', 'Reverso'],
    ['uniq archivo', 'Eliminar duplicados consecutivos'],
    ['uniq -c archivo', 'Contar ocurrencias'],
    ['nl archivo', 'Numerar líneas'],
  ]},
  { category: 'Búsqueda en archivos (grep)', items: [
    ['grep "patrón" archivo', 'Buscar texto'],
    ['grep -i "patrón" archivo', 'Ignorar mayúsculas'],
    ['grep -r "patrón" dir', 'Recursivo'],
    ['grep -v "patrón" archivo', 'Líneas que NO coinciden'],
    ['grep -n "patrón" archivo', 'Con números de línea'],
    ['grep -c "patrón" archivo', 'Contar coincidencias'],
    ['grep -E "p1|p2" archivo', 'Múltiples patrones (regex)'],
    ['grep -w "palabra" archivo', 'Palabra completa'],
    ['grep -l "patrón" *.txt', 'Solo nombres de archivos'],
    ['grep -A 3 "p" archivo', '3 líneas después'],
    ['grep -B 2 "p" archivo', '2 líneas antes'],
    ['grep -C 2 "p" archivo', '2 líneas antes y después'],
  ]},
  { category: 'Manipulación de texto', items: [
    [`sed 's/viejo/nuevo/g' archivo`, 'Reemplazar'],
    [`sed -i 's/viejo/nuevo/g' archivo`, 'Reemplazar en original'],
    [`awk '{print $1}' archivo`, 'Primera columna'],
    [`awk -F',' '{print $2}' archivo`, 'Columna 2, separador coma'],
    [`cut -d',' -f1,3 archivo`, 'Columnas 1 y 3'],
    [`tr 'a-z' 'A-Z' < archivo`, 'Minúsculas → mayúsculas'],
    [`tr -d '\\r' < archivo`, 'Eliminar retornos de carro'],
  ]},
  { category: 'Permisos y propietarios', items: [
    ['chmod 755 archivo', 'rwxr-xr-x'],
    ['chmod 644 archivo', 'rw-r--r--'],
    ['chmod 700 dir/', 'rwx------'],
    ['chmod 600 .ssh/id_rsa', 'rw------- (clave SSH)'],
    ['chmod +x archivo', 'Hacer ejecutable'],
    ['chmod u+x archivo', 'Ejecución al dueño'],
    ['chmod g+w archivo', 'Escritura al grupo'],
    ['chmod -R 755 dir', 'Recursivo'],
    ['chown usuario:grupo archivo', 'Cambiar dueño y grupo'],
    ['chgrp grupo archivo', 'Cambiar grupo'],
    ['sudo comando', 'Ejecutar como root'],
  ]},
  { category: 'Procesos', items: [
    ['ps', 'Procesos del terminal actual'],
    ['ps aux', 'Todos los procesos'],
    ['ps aux | grep nombre', 'Filtrar proceso'],
    ['ps aux --sort=-%mem | head', 'Top por memoria'],
    ['ps aux --sort=-%cpu | head', 'Top por CPU'],
    ['top', 'Monitor en tiempo real'],
    ['htop', 'Monitor visual mejorado'],
    ['pgrep nombre', 'PID por nombre'],
    ['pidof proceso', 'PID exacto'],
    ['kill PID', 'Terminar (SIGTERM)'],
    ['kill -9 PID', 'Forzar (SIGKILL)'],
    ['kill -STOP PID', 'Pausar'],
    ['kill -CONT PID', 'Reanudar'],
    ['killall nombre', 'Matar todos por nombre'],
    ['pkill nombre', 'Similar a killall'],
    ['jobs', 'Listar trabajos background'],
    ['bg %1', 'Mandar a background'],
    ['fg %1', 'Traer a foreground'],
    ['nohup comando &', 'Inmune a hangups'],
  ]},
  { category: 'Redirección e I/O', items: [
    ['comando > archivo', 'Escribir (sobreescribe)'],
    ['comando >> archivo', 'Agregar (append)'],
    ['comando < archivo', 'Usar como entrada'],
    ['comando 2> archivo', 'Redirigir errores'],
    ['comando 2>> archivo', 'Append de errores'],
    ['comando &> archivo', 'Todo (stdout + stderr)'],
    ['comando > /dev/null', 'Descartar salida'],
    ['comando > /dev/null 2>&1', 'Descartar todo'],
    ['cmd1 | cmd2', 'Pipe'],
    ['cmd | tee archivo', 'Guardar y mostrar'],
    ['cmd | xargs otro', 'Pasar como argumentos'],
  ]},
  { category: 'Operadores de control', items: [
    ['cmd1 ; cmd2', 'Secuencial (ambos)'],
    ['cmd1 && cmd2', 'AND (solo si cmd1 éxito)'],
    ['cmd1 || cmd2', 'OR (solo si cmd1 falla)'],
    ['comando &', 'Background'],
    ['$?', 'Código de salida del último comando'],
  ]},
  { category: 'Compresión', items: [
    ['tar -czvf arch.tar.gz dir/', 'Crear .tar.gz'],
    ['tar -xzvf arch.tar.gz', 'Extraer .tar.gz'],
    ['tar -xzvf arch.tar.gz -C /destino/', 'Extraer en otro directorio'],
    ['tar -tzvf arch.tar.gz', 'Listar contenido'],
    ['tar -cjvf arch.tar.bz2 dir/', 'Crear .tar.bz2'],
    ['tar -xjvf arch.tar.bz2', 'Extraer .tar.bz2'],
    ['gzip archivo', 'Comprimir'],
    ['gunzip archivo.gz', 'Descomprimir'],
    ['gzip -k archivo', 'Comprimir manteniendo original'],
    ['zip -r arch.zip dir/', 'Crear ZIP'],
    ['unzip arch.zip', 'Extraer ZIP'],
    ['unzip -l arch.zip', 'Listar contenido'],
  ]},
  { category: 'Variables de entorno', items: [
    ['export VAR=valor', 'Crear variable global'],
    ['echo $VAR', 'Mostrar valor'],
    ['env', 'Listar todas'],
    ['printenv', 'Igual que env'],
    ['unset VAR', 'Eliminar'],
    ['export PATH=$PATH:/nueva/ruta', 'Agregar al PATH'],
    ['echo $HOME', 'Home del usuario'],
    ['echo $USER', 'Usuario actual'],
    ['echo $SHELL', 'Shell en uso'],
    ['echo $PWD', 'Directorio actual'],
    ['echo $PS1', 'Formato del prompt'],
    ['echo $$', 'PID del proceso'],
  ]},
  { category: 'Alias', items: [
    [`alias ll='ls -la'`, 'Crear alias temporal'],
    ['alias', 'Ver todos'],
    ['unalias ll', 'Eliminar alias'],
    ['source ~/.bashrc', 'Recargar configuración bash'],
    ['source ~/.zshrc', 'Recargar configuración zsh'],
  ]},
  { category: 'Red', items: [
    ['ip a', 'Interfaces y direcciones'],
    ['ip r', 'Tabla de rutas'],
    ['ifconfig', 'Info de interfaces (legacy)'],
    ['hostname -I', 'IP local'],
    ['ping -c 4 host', 'Verificar conectividad'],
    ['traceroute host', 'Rastrear ruta'],
    ['curl url', 'Request HTTP'],
    ['curl -O url', 'Descargar'],
    ['curl -I url', 'Solo headers'],
    ['wget url', 'Descargar archivo'],
    ['wget -c url', 'Continuar descarga'],
    ['nslookup dominio', 'Resolver DNS'],
    ['dig dominio', 'DNS detallado'],
    ['netstat -tuln', 'Puertos abiertos'],
    ['ss -tuln', 'Alternativa moderna'],
    ['nmap host', 'Escanear puertos'],
    ['ssh usuario@host', 'Conectar remoto'],
    ['scp archivo user@host:/ruta', 'Copiar por SSH'],
  ]},
  { category: 'Sistema', items: [
    ['uname -a', 'Info completa del sistema'],
    ['uname -r', 'Versión del kernel'],
    ['free -h', 'Memoria RAM'],
    ['df -h', 'Espacio en disco'],
    ['du -sh dir', 'Tamaño de carpeta'],
    ['du -h --max-depth=1', 'Tamaño por subdirectorio'],
    ['uptime', 'Tiempo encendido'],
    ['who', 'Usuarios conectados'],
    ['w', 'Usuarios y actividad'],
    ['id', 'Info del usuario actual'],
    ['neofetch', 'Info visual del sistema'],
    ['lscpu', 'Info del procesador'],
    ['date', 'Fecha y hora'],
    ['hostname', 'Nombre de la máquina'],
    ['whoami', 'Usuario actual'],
  ]},
  { category: 'Gestión de paquetes', items: [
    ['sudo apt update', 'Actualizar lista (Debian/Ubuntu)'],
    ['sudo apt upgrade -y', 'Actualizar instalados'],
    ['sudo apt install paquete', 'Instalar'],
    ['sudo apt remove paquete', 'Eliminar'],
    ['sudo apt purge paquete', 'Eliminar + config'],
    ['sudo apt autoremove', 'Dependencias huérfanas'],
    ['apt search "editor"', 'Buscar paquete'],
    ['apt show htop', 'Información detallada'],
    ['brew install paquete', 'Instalar (macOS)'],
    ['brew uninstall paquete', 'Desinstalar'],
    ['brew update && brew upgrade', 'Actualizar'],
    ['brew list', 'Listar instalados'],
    ['brew search nombre', 'Buscar'],
    ['brew cleanup', 'Limpiar versiones viejas'],
    ['brew install --cask app', 'Instalar app gráfica'],
  ]},
  { category: 'Editores de terminal', items: [
    ['nano archivo', 'Abrir nano'],
    ['Ctrl + O', 'Guardar en nano'],
    ['Ctrl + X', 'Salir en nano'],
    ['Ctrl + K', 'Cortar línea (nano)'],
    ['Ctrl + U', 'Pegar (nano)'],
    ['Ctrl + W', 'Buscar (nano)'],
    ['vim archivo', 'Abrir vim'],
    ['i', 'Modo insertar (vim)'],
    ['ESC', 'Volver a modo normal (vim)'],
    [':w', 'Guardar (vim)'],
    [':q', 'Salir (vim)'],
    [':wq', 'Guardar y salir'],
    [':q!', 'Salir sin guardar'],
    ['dd', 'Borrar línea (vim)'],
    ['yy', 'Copiar línea (vim)'],
    ['p', 'Pegar (vim)'],
    ['gg', 'Ir al inicio (vim)'],
    ['G', 'Ir al final (vim)'],
    ['u', 'Deshacer (vim)'],
    ['/patrón', 'Buscar (vim)'],
  ]},
  { category: 'Tmux', items: [
    ['tmux', 'Nueva sesión'],
    ['tmux new -s nombre', 'Sesión con nombre'],
    ['tmux ls', 'Listar sesiones'],
    ['tmux attach -t nombre', 'Reconectar'],
    ['tmux kill-session -t nombre', 'Matar sesión'],
    ['Ctrl+b d', 'Desconectarse'],
    ['Ctrl+b c', 'Nueva ventana'],
    ['Ctrl+b n', 'Siguiente ventana'],
    ['Ctrl+b p', 'Ventana anterior'],
    ['Ctrl+b ,', 'Renombrar ventana'],
    ['Ctrl+b %', 'Split vertical'],
    ['Ctrl+b "', 'Split horizontal'],
    ['Ctrl+b flecha', 'Moverse entre paneles'],
    ['Ctrl+b z', 'Zoom al panel'],
  ]},
  { category: 'Wildcards', items: [
    ['*', 'Cualquier cadena: ls *.py'],
    ['?', 'Un carácter: ls archivo?.txt'],
    ['[abc]', 'Uno del conjunto: ls archivo[123].txt'],
    ['[!abc]', 'Uno que NO está: ls archivo[!0-9].txt'],
    ['{a,b}', 'Expansión: mkdir {src,tests,docs}'],
    ['{1..10}', 'Rango: touch file{1..10}.txt'],
  ]},
  { category: 'Atajos de teclado', items: [
    ['Tab', 'Autocompletar'],
    ['Tab + Tab', 'Mostrar opciones'],
    ['↑ / ↓', 'Historial de comandos'],
    ['Ctrl + R', 'Buscar en historial'],
    ['Ctrl + C', 'Interrumpir proceso'],
    ['Ctrl + Z', 'Suspender proceso'],
    ['Ctrl + D', 'EOF / cerrar sesión'],
    ['Ctrl + L', 'Limpiar pantalla'],
    ['Ctrl + A', 'Inicio de línea'],
    ['Ctrl + E', 'Final de línea'],
    ['Ctrl + U', 'Borrar izquierda del cursor'],
    ['Ctrl + K', 'Borrar derecha del cursor'],
    ['Ctrl + W', 'Borrar palabra anterior'],
    ['Alt + B', 'Mover palabra atrás'],
    ['Alt + F', 'Mover palabra adelante'],
    ['!!', 'Repetir último comando'],
    ['!$', 'Último argumento del comando anterior'],
  ]},
  { category: 'Archivos de configuración', items: [
    ['/etc/passwd', 'Información de usuarios'],
    ['/etc/group', 'Información de grupos'],
    ['/etc/fstab', 'Sistemas de archivos automontados'],
    ['/etc/crontab', 'Tareas programadas del sistema'],
    ['~/.bashrc', 'Config personal de bash'],
    ['~/.zshrc', 'Config personal de zsh'],
    ['~/.ssh/config', 'Configuración SSH personal'],
    ['~/.profile', 'Se ejecuta al iniciar sesión'],
  ]},
  { category: 'Combinaciones poderosas', items: [
    [`find . -name "*.log" -exec rm {} \\;`, 'Encontrar y eliminar'],
    [`ps aux | grep p | awk '{print $2}' | xargs kill`, 'Matar procesos por nombre'],
    ['du -sh * | sort -hr', 'Directorios por tamaño'],
    ['tail -f /var/log/syslog | grep ERROR', 'Monitorear errores en vivo'],
    ['cat log.txt | sort | uniq -c | sort -rn | head', 'Top 10 líneas frecuentes'],
    ['history | grep git', 'Buscar en historial'],
    [`find . -type f -name "*.py" | xargs grep "import"`, 'Grep en muchos archivos'],
  ]},
];

// ═══════════════════════════════════════════════════════════════════════════
// UI HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function CopyButton({ text, small = false }) {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };
  return (
    <button
      onClick={onClick}
      className={`${small ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1'} rounded border border-slate-700 bg-slate-900 text-slate-400 hover:border-emerald-500 hover:text-emerald-400 transition-colors font-mono`}
      title="Copiar"
    >
      {copied ? '✓ copiado' : 'copiar'}
    </button>
  );
}

function InlineCmd({ cmd, desc }) {
  return (
    <div className="group flex items-start gap-3 py-2 px-3 rounded border border-slate-800 bg-slate-950/50 hover:border-slate-700 transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 font-mono text-sm">
          <span className="text-emerald-500 select-none">$</span>
          <code className="text-emerald-300 break-all">{cmd}</code>
        </div>
        {desc && <div className="mt-1 text-xs text-slate-400 leading-relaxed">{desc}</div>}
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
        <CopyButton text={cmd} small />
      </div>
    </div>
  );
}

function CodeBlock({ code, title }) {
  return (
    <div className="rounded-lg border border-slate-800 overflow-hidden bg-slate-950">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
          </div>
          {title && <span className="ml-2 text-xs text-slate-500 font-mono">{title}</span>}
        </div>
        <CopyButton text={code} small />
      </div>
      <pre className="px-4 py-3 text-sm text-emerald-200 font-mono overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Note({ variant = 'info', children }) {
  const styles = {
    info: 'border-blue-900 bg-blue-950/30 text-blue-200',
    tip: 'border-indigo-900 bg-indigo-950/30 text-indigo-200',
    warning: 'border-orange-900 bg-orange-950/30 text-orange-200',
  };
  const labels = { info: 'Dato', tip: 'Tip pro', warning: 'Precaución' };
  return (
    <div className={`rounded border-l-4 ${styles[variant]} px-4 py-3 text-sm`}>
      <div className="text-[10px] uppercase tracking-wider font-semibold mb-1 opacity-70">{labels[variant]}</div>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

function Block({ block }) {
  if (block.type === 'commands') {
    return (
      <section>
        {block.title && <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">{block.title}</h3>}
        <div className="space-y-1.5">
          {block.items.map(([cmd, desc], i) => <InlineCmd key={i} cmd={cmd} desc={desc} />)}
        </div>
      </section>
    );
  }
  if (block.type === 'code') {
    return (
      <section>
        {block.title && <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">{block.title}</h3>}
        <CodeBlock code={block.code} />
      </section>
    );
  }
  if (block.type === 'table') {
    return (
      <section>
        {block.title && <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">{block.title}</h3>}
        <div className="overflow-x-auto rounded border border-slate-800">
          <table className="w-full text-sm">
            <thead className="bg-slate-900">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-2.5 text-left font-semibold text-slate-300 border-b border-slate-800">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-slate-900 last:border-0 hover:bg-slate-900/40">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-2.5 ${j === 0 ? 'font-mono text-emerald-300' : 'text-slate-400'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  if (block.type === 'list') {
    return (
      <section>
        {block.title && <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">{block.title}</h3>}
        <ul className="space-y-2">
          {block.items.map(([term, desc], i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="text-emerald-500 mt-1 shrink-0">▸</span>
              <div>
                <span className="text-slate-200 font-medium">{term}</span>
                {desc && <span className="text-slate-400"> — {desc}</span>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  if (block.type === 'note') {
    return <Note variant={block.variant}>{block.text}</Note>;
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════════════════
// VIEWS
// ═══════════════════════════════════════════════════════════════════════════

function ActivityCard({ module, completed, onToggle }) {
  const { activity } = module;
  return (
    <div className={`mt-10 rounded-lg border-2 ${completed ? 'border-emerald-700 bg-emerald-950/20' : 'border-emerald-900/50 bg-slate-900/40'} p-6`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-emerald-500 font-semibold mb-1">Actividad del proyecto</div>
          <h3 className="text-lg font-bold text-slate-100">Data Pipeline — Módulo {module.id}</h3>
        </div>
        <button
          onClick={onToggle}
          className={`shrink-0 px-3 py-1.5 rounded text-xs font-semibold border transition-colors ${
            completed
              ? 'border-emerald-500 bg-emerald-500 text-slate-950'
              : 'border-slate-700 text-slate-400 hover:border-emerald-500 hover:text-emerald-400'
          }`}
        >
          {completed ? '✓ Completada' : 'Marcar como hecha'}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Objetivo</div>
          <p className="text-sm text-slate-300">{activity.goal}</p>
        </div>
        {activity.steps ? (
          activity.steps.map((step, i) => (
            <div key={i}>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Paso {i + 1} — {step.label}</div>
              <CodeBlock code={step.commands.join('\n')} />
              {step.hint && (
                <p className="mt-2 text-xs text-amber-300/80 bg-amber-500/10 border border-amber-500/20 rounded px-3 py-2">
                  <strong>💡 Tip:</strong> {step.hint}
                </p>
              )}
            </div>
          ))
        ) : (
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-2">Comandos a ejecutar</div>
            <CodeBlock code={activity.commands.join('\n')} />
          </div>
        )}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Resultado esperado</div>
          <p className="text-sm text-slate-300 whitespace-pre-line">{activity.expected}</p>
        </div>
        <div className="pt-3 border-t border-slate-800">
          <div className="text-[10px] uppercase tracking-wider text-indigo-400 font-semibold mb-1">Conexión con el proyecto</div>
          <p className="text-sm text-indigo-200/80 italic">{activity.connection}</p>
        </div>
      </div>
    </div>
  );
}

function CursoView({ currentModuleId, setCurrentModuleId, completedActivities, toggleActivity, sidebarOpen, setSidebarOpen }) {
  const currentModule = MODULES.find(m => m.id === currentModuleId);
  const currentIndex = MODULES.findIndex(m => m.id === currentModuleId);
  const progress = Math.round(((currentIndex + 1) / MODULES.length) * 100);

  const modulesBySection = SECTIONS.map((name, i) => ({
    name,
    modules: MODULES.filter(m => m.section === i),
  }));

  return (
    <div className="flex flex-1 min-h-0">
      <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-72 shrink-0 border-r border-slate-800 overflow-y-auto bg-slate-950`}>
        <div className="p-4 border-b border-slate-800 sticky top-0 bg-slate-950 z-10">
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Progreso</div>
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-lg font-bold text-emerald-400 font-mono">{currentIndex + 1}/{MODULES.length}</span>
            <span className="text-xs text-slate-500">{progress}%</span>
          </div>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <nav className="p-2">
          {modulesBySection.map((section, si) => (
            <div key={si} className="mb-3">
              <div className="px-2 py-1.5 text-[10px] uppercase tracking-wider text-slate-600 font-semibold">
                {section.name}
              </div>
              {section.modules.map(m => {
                const done = completedActivities.has(m.id);
                const active = m.id === currentModuleId;
                return (
                  <button
                    key={m.id}
                    onClick={() => { setCurrentModuleId(m.id); setSidebarOpen(false); }}
                    className={`w-full text-left px-3 py-2 rounded text-sm font-mono flex items-center gap-2 mb-0.5 transition-colors ${
                      active ? 'bg-emerald-500/10 text-emerald-300 border-l-2 border-emerald-500' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200 border-l-2 border-transparent'
                    }`}
                  >
                    <span className={`text-xs w-6 shrink-0 ${active ? 'text-emerald-500' : 'text-slate-600'}`}>
                      {String(m.id).padStart(2, '0')}
                    </span>
                    <span className="truncate flex-1">{m.title}</span>
                    {done && <span className="text-emerald-500 text-xs shrink-0">✓</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      <main className={`${sidebarOpen ? 'hidden' : 'flex'} md:flex flex-1 flex-col min-w-0 overflow-y-auto`}>
        <div className="max-w-4xl w-full mx-auto px-4 md:px-8 py-8">
          <div className="mb-6">
            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-2">
              {SECTIONS[currentModule.section]} · Módulo {currentModule.id}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3 leading-tight">
              {currentModule.title}
            </h1>
            <div className="flex items-center gap-3 text-xs">
              <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 font-mono border border-slate-800">
                ⏱ {currentModule.duration}
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-lg border border-slate-800 bg-slate-900/40 p-5">
            <div className="text-[10px] uppercase tracking-wider text-emerald-500 font-semibold mb-2">Resumen</div>
            <p className="text-slate-300 leading-relaxed">{currentModule.summary}</p>
          </div>

          <div className="space-y-8">
            {currentModule.blocks.map((block, i) => <Block key={i} block={block} />)}
          </div>

          <ActivityCard
            module={currentModule}
            completed={completedActivities.has(currentModule.id)}
            onToggle={() => toggleActivity(currentModule.id)}
          />

          <div className="mt-8 flex justify-between gap-4">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentModuleId(MODULES[currentIndex - 1].id)}
              className="px-4 py-2.5 rounded border border-slate-800 text-slate-400 text-sm hover:border-emerald-500 hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← Módulo anterior
            </button>
            <button
              disabled={currentIndex === MODULES.length - 1}
              onClick={() => setCurrentModuleId(MODULES[currentIndex + 1].id)}
              className="px-4 py-2.5 rounded border border-slate-800 text-slate-400 text-sm hover:border-emerald-500 hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Siguiente módulo →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function ProyectoView({ completedActivities, toggleActivity, setTab, setCurrentModuleId }) {
  const totalDone = completedActivities.size;
  const progress = Math.round((totalDone / MODULES.length) * 100);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="mb-8">
          <div className="text-xs text-emerald-500 font-mono uppercase tracking-wider mb-2">Proyecto integrador</div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            Construye tu Data Pipeline desde la terminal
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            Un proyecto real que se construye módulo a módulo. Cada actividad te enseña comandos nuevos y avanza el pipeline: organizar, procesar y analizar un dataset desde cero usando solo la terminal.
          </p>
        </div>

        <div className="mb-8 rounded-lg border border-slate-800 bg-slate-900/40 p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-300">Progreso global</span>
            <span className="text-sm font-mono text-emerald-400">{totalDone} / {MODULES.length} ({progress}%)</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="space-y-8">
          {PROJECT_PHASES.map((phase, pi) => {
            const phaseModules = MODULES.filter(m => phase.modules.includes(m.id));
            const phaseDone = phaseModules.filter(m => completedActivities.has(m.id)).length;
            const phaseComplete = phaseDone === phaseModules.length;
            return (
              <div key={pi} className="rounded-lg border border-slate-800 overflow-hidden">
                <div className={`px-5 py-4 border-b border-slate-800 ${phaseComplete ? 'bg-emerald-950/30' : 'bg-slate-900/60'}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-slate-500">Fase {pi + 1}</span>
                        {phaseComplete && <span className="text-xs text-emerald-400">✓ completa</span>}
                      </div>
                      <h2 className="text-xl font-bold text-slate-100">{phase.name}</h2>
                      <p className="text-sm text-slate-400 mt-1">{phase.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-slate-500">Actividades</div>
                      <div className="text-lg font-mono text-emerald-400">{phaseDone}/{phaseModules.length}</div>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-slate-800">
                  {phaseModules.map(m => {
                    const done = completedActivities.has(m.id);
                    return (
                      <div key={m.id} className="px-5 py-4 hover:bg-slate-900/40 transition-colors">
                        <div className="flex items-start gap-4">
                          <button
                            onClick={() => toggleActivity(m.id)}
                            className={`mt-0.5 shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                              done ? 'border-emerald-500 bg-emerald-500' : 'border-slate-700 hover:border-emerald-500'
                            }`}
                          >
                            {done && <span className="text-slate-950 text-xs font-bold">✓</span>}
                          </button>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="text-xs font-mono text-slate-600">#{String(m.id).padStart(2, '0')}</span>
                              <button
                                onClick={() => { setTab('curso'); setCurrentModuleId(m.id); }}
                                className="text-sm font-semibold text-slate-200 hover:text-emerald-400 text-left"
                              >
                                {m.title}
                              </button>
                            </div>
                            <p className="text-sm text-slate-400 mb-2">{m.activity.goal}</p>
                            <div className="font-mono text-xs text-emerald-300/80 bg-slate-950 rounded p-2 border border-slate-800 overflow-x-auto">
                              {m.activity.commands.slice(0, 2).map((c, i) => (
                                <div key={i} className="whitespace-pre"><span className="text-emerald-600">$</span> {c}</div>
                              ))}
                              {m.activity.commands.length > 2 && <div className="text-slate-600">  ... +{m.activity.commands.length - 2} más</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CheatView() {
  const [query, setQuery] = useState('');
  const [collapsed, setCollapsed] = useState(() => new Set());

  const toggleCollapsed = (cat) => {
    setCollapsed(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return CHEAT_SHEET;
    const q = query.toLowerCase();
    return CHEAT_SHEET
      .map(cat => ({
        ...cat,
        items: cat.items.filter(([cmd, desc]) =>
          cmd.toLowerCase().includes(q) || desc.toLowerCase().includes(q)
        ),
      }))
      .filter(cat => cat.items.length > 0);
  }, [query]);

  const totalCommands = CHEAT_SHEET.reduce((acc, c) => acc + c.items.length, 0);
  const filteredCount = filtered.reduce((acc, c) => acc + c.items.length, 0);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="mb-6">
          <div className="text-xs text-emerald-500 font-mono uppercase tracking-wider mb-2">Biblioteca de comandos</div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Cheat Sheet completo</h1>
          <p className="text-slate-400">
            {totalCommands} comandos organizados por categoría. Búsqueda en tiempo real por comando o descripción.
          </p>
        </div>

        <div className="sticky top-0 z-20 -mx-4 md:-mx-8 px-4 md:px-8 py-4 bg-slate-950/95 backdrop-blur border-b border-slate-800 mb-6">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500 font-mono">$</span>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="buscar comando o descripción..."
              className="w-full pl-8 pr-4 py-3 bg-slate-900 border border-slate-800 rounded font-mono text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              >
                limpiar ✕
              </button>
            )}
          </div>
          {query && (
            <div className="mt-2 text-xs text-slate-500 font-mono">
              {filteredCount} resultado{filteredCount !== 1 ? 's' : ''} en {filtered.length} categoría{filtered.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        <div className="space-y-4">
          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <div className="text-4xl mb-3">∅</div>
              <div>No hay comandos que coincidan con "{query}"</div>
            </div>
          )}
          {filtered.map(cat => {
            const isCollapsed = collapsed.has(cat.category);
            return (
              <div key={cat.category} className="rounded-lg border border-slate-800 overflow-hidden bg-slate-900/30">
                <button
                  onClick={() => toggleCollapsed(cat.category)}
                  className="w-full px-5 py-3 flex items-center justify-between bg-slate-900 hover:bg-slate-900/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-slate-500 text-xs transition-transform ${isCollapsed ? '' : 'rotate-90'}`}>▶</span>
                    <h2 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">{cat.category}</h2>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{cat.items.length}</span>
                </button>
                {!isCollapsed && (
                  <div className="divide-y divide-slate-800/50">
                    {cat.items.map(([cmd, desc], i) => (
                      <div key={i} className="group px-5 py-2.5 hover:bg-slate-900/40 transition-colors flex items-start gap-4">
                        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 items-baseline">
                          <code className="md:col-span-2 font-mono text-sm text-emerald-300 break-all">{cmd}</code>
                          <span className="md:col-span-3 text-xs text-slate-400 leading-relaxed">{desc}</span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          <CopyButton text={cmd} small />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SETUP VIEW
// ═══════════════════════════════════════════════════════════════════════════

const SETUP_FILES = [
  { name: 'marvel_wiki.csv', desc: 'Dataset principal — personajes de Marvel con atributos para análisis.', size: '2.3 MB' },
  { name: 'linux.txt', desc: 'Archivo de texto para practicar búsqueda, filtrado y edición.', size: '6 KB' },

  { name: 'busqueda_terminal.txt', desc: 'Texto con patrones para practicar grep y expresiones regulares.', size: '830 B' },
];

function SetupView({ onStart }) {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-400 font-mono">Antes de comenzar</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Este curso incluye un proyecto práctico llamado <span className="text-slate-200 font-semibold">Data Pipeline</span>.
            Necesitarás estos archivos para completar las actividades de cada módulo.
          </p>
        </div>

        {/* Step 1 — Download */}
        <section className="rounded-lg border border-slate-800 bg-slate-900/50 p-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 font-bold text-sm font-mono">1</span>
            <h2 className="text-lg font-semibold text-slate-100">Descarga los archivos del proyecto</h2>
          </div>
          <p className="text-sm text-slate-400 ml-11">Haz clic en el botón para descargar todos los archivos en un solo ZIP, o descárgalos individualmente.</p>
          <div className="ml-11">
            <a
              href="/archivos/data-pipeline-archivos.zip"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
            >
              ⬇ Descargar todo (ZIP · 406 KB)
            </a>
          </div>
          <div className="ml-11 mt-3 space-y-2">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Archivos incluidos</p>
            {SETUP_FILES.map(f => (
              <div key={f.name} className="flex items-center justify-between gap-4 py-2 px-3 rounded bg-slate-800/60 text-sm">
                <div className="min-w-0">
                  <a href={`/archivos/${f.name}`} download className="text-emerald-400 hover:underline font-mono text-xs">{f.name}</a>
                  <p className="text-slate-500 text-xs mt-0.5">{f.desc}</p>
                </div>
                <span className="text-slate-600 text-xs shrink-0 font-mono">{f.size}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Step 2 — Go to Module 1 */}
        <section className="rounded-lg border border-slate-800 bg-slate-900/50 p-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 font-bold text-sm font-mono">2</span>
            <h2 className="text-lg font-semibold text-slate-100">Coloca los archivos siguiendo el Módulo 1</h2>
          </div>
          <p className="text-sm text-slate-400 ml-11">
            La actividad del <strong className="text-slate-200">Módulo 1</strong> te guía paso a paso para crear la carpeta del proyecto,
            mover los archivos y verificar que todo esté listo — usando la terminal desde el primer minuto.
            Así empiezas a practicar con comandos reales desde el inicio.
          </p>
          <div className="ml-11">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
            >
              ▶ Ir al Módulo 1
            </button>
          </div>
        </section>


      </div>
    </main>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════

export default function BashCourse() {
  const [tab, setTab] = useState('curso');
  const [currentModuleId, setCurrentModuleId] = useState(1);
  const [completedActivities, setCompletedActivities] = useState(() => new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleActivity = (id) => {
    setCompletedActivities(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    document.title = `Curso Terminal · Módulo ${currentModuleId}`;
  }, [currentModuleId]);

  const tabs = [
    { id: 'setup', label: 'Setup', icon: '📦' },
    { id: 'curso', label: 'Curso', icon: '▶' },
    { id: 'proyecto', label: 'Proyecto', icon: '◆' },
    { id: 'cheat', label: 'Cheat Sheet', icon: '⌘' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 font-sans">
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {tab === 'curso' && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 text-slate-400 hover:text-emerald-400 -ml-2"
              >
                ☰
              </button>
            )}
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-emerald-500 font-mono text-lg shrink-0">$_</span>
              <div className="min-w-0">
                <div className="text-sm md:text-base font-bold text-slate-100 font-mono truncate">terminal-course</div>
                <div className="text-[10px] text-slate-500 hidden sm:block">26 módulos · Linux & Bash interactivo</div>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-1 shrink-0">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => { setTab(t.id); setSidebarOpen(false); }}
                className={`px-3 md:px-4 py-2 rounded text-xs md:text-sm font-mono font-semibold transition-colors ${
                  tab === t.id
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                <span className="mr-1.5 text-xs opacity-60">{t.icon}</span>
                <span className="hidden sm:inline">{t.label}</span>
                <span className="sm:hidden">{t.label.slice(0, 4)}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {tab === 'setup' && <SetupView onStart={() => setTab('curso')} />}
      {tab === 'curso' && (
        <CursoView
          currentModuleId={currentModuleId}
          setCurrentModuleId={setCurrentModuleId}
          completedActivities={completedActivities}
          toggleActivity={toggleActivity}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
      {tab === 'proyecto' && (
        <ProyectoView
          completedActivities={completedActivities}
          toggleActivity={toggleActivity}
          setTab={setTab}
          setCurrentModuleId={setCurrentModuleId}
        />
      )}
      {tab === 'cheat' && <CheatView />}
    </div>
  );
}

import { useState } from "react";
import { AWK_SECTION } from "./awk_module";

const SECTIONS = [
  {
    id: "wsl",
    icon: "⚙",
    title: "Instalación WSL / Linux",
    subtitle: "Tu puerta de entrada al terminal",
    intro: "WSL (Windows Subsystem for Linux) te permite correr una distribución Linux completa dentro de Windows sin necesidad de dual boot ni máquina virtual.",
    blocks: [
      {
        type: "steps",
        title: "Instalación en 3 pasos",
        items: [
          {
            label: "1. Abre PowerShell como administrador y ejecuta:",
            cmd: "wsl --install",
            note: "Esto instala Ubuntu por defecto. Reinicia tu PC cuando termine.",
          },
          {
            label: "2. Después de reiniciar, se abre Ubuntu automáticamente. Crea tu usuario y contraseña:",
            cmd: "Enter new UNIX username: usuario\nNew password: ********",
            note: "Esta contraseña la usarás para instalar paquetes con sudo.",
          },
          {
            label: "3. Actualiza los paquetes del sistema:",
            cmd: "sudo apt update && sudo apt upgrade -y",
            note: "Siempre hazlo después de instalar. 'sudo' = superusuario (root).",
          },
        ],
      },
      {
        type: "commands",
        title: "Comandos WSL útiles (desde PowerShell)",
        items: [
          { cmd: "wsl --list --verbose", desc: "Ver distribuciones instaladas y su estado" },
          { cmd: "wsl --set-default Ubuntu", desc: "Establecer Ubuntu como distro por defecto" },
          { cmd: "wsl --shutdown", desc: "Apagar todas las instancias WSL" },
          { cmd: "wsl -d Ubuntu", desc: "Iniciar una distribución específica" },
        ],
      },
      {
        type: "curiosity",
        text: "¿Sabías que WSL2 usa un kernel Linux real compilado por Microsoft? No es emulación — es Linux de verdad corriendo en un microVM ultraligera con Hyper-V.",
      },
    ],
  },
  {
    id: "filesystem",
    icon: "🗂",
    title: "El Filesystem de Linux",
    subtitle: "Todo es un archivo",
    intro: "En Linux no hay 'C:\\' ni 'D:\\'. Todo parte de una raíz única: /. Cada carpeta tiene un propósito específico. Entender esta estructura es fundamental.",
    blocks: [
      {
        type: "tree",
        title: "Estructura del sistema de archivos",
        content: `/                    ← Raíz absoluta de todo
├── home/            ← Carpetas personales de usuarios
│   └── usuario/   ← Tu directorio HOME (~)
│       ├── Documents/
│       ├── Downloads/
│       └── projects/
├── etc/             ← Archivos de configuración del sistema
├── var/             ← Datos variables (logs, cache, mail)
│   └── log/         ← Aquí viven los logs del sistema
├── tmp/             ← Archivos temporales (se borran al reiniciar)
├── usr/             ← Programas y utilidades del usuario
│   ├── bin/         ← Binarios/ejecutables de usuario
│   └── lib/         ← Librerías compartidas
├── bin/             ← Comandos esenciales del sistema
├── dev/             ← Dispositivos (discos, USB, etc.)
├── proc/            ← Info en tiempo real del kernel y procesos
└── mnt/             ← Punto de montaje (aquí WSL monta C:\)`,
      },
      {
        type: "commands",
        title: "Rutas: Absolutas vs Relativas",
        items: [
          { cmd: "cd /home/usuario/projects", desc: "Ruta ABSOLUTA — empieza desde / (la raíz)" },
          { cmd: "cd projects", desc: "Ruta RELATIVA — parte del directorio actual" },
          { cmd: "cd ~", desc: "~ es un atajo a tu HOME (/home/tu_usuario)" },
          { cmd: "cd ..", desc: ".. = directorio padre (subir un nivel)" },
          { cmd: "cd .", desc: ". = directorio actual (útil en scripts)" },
          { cmd: "cd -", desc: "Volver al directorio anterior (como alt+tab)" },
        ],
      },
      {
        type: "curiosity",
        text: "En Linux, literalmente TODO es un archivo. ¿Tu disco duro? /dev/sda. ¿Tu webcam? /dev/video0. ¿La memoria RAM? /proc/meminfo. Hasta los procesos corriendo son 'archivos' en /proc/. Esta filosofía es lo que hace a Unix tan poderoso.",
      },
    ],
  },
  {
    id: "navigation",
    icon: "🧭",
    title: "Navegación: ls, cd, pwd",
    subtitle: "Moverse por el sistema como un profesional",
    intro: "Estos tres comandos son tu brújula. Los usarás cientos de veces al día. pwd te dice dónde estás, ls qué hay aquí, y cd te mueve.",
    blocks: [
      {
        type: "commands",
        title: "pwd — Print Working Directory",
        items: [
          { cmd: "pwd", desc: "Muestra la ruta completa del directorio actual", output: "/home/usuario/projects" },
        ],
      },
      {
        type: "commands",
        title: "ls — Listar contenido",
        items: [
          { cmd: "ls", desc: "Listar archivos y carpetas del directorio actual" },
          { cmd: "ls -l", desc: "Formato largo: permisos, dueño, tamaño, fecha" },
          { cmd: "ls -la", desc: "Incluir archivos ocultos (empiezan con .)" },
          { cmd: "ls -lh", desc: "Tamaños legibles (KB, MB, GB en vez de bytes)" },
          { cmd: "ls -lt", desc: "Ordenar por fecha de modificación (más reciente primero)" },
          { cmd: "ls -lS", desc: "Ordenar por tamaño (más grande primero)" },
          { cmd: "ls -R", desc: "Listar recursivamente (incluye subdirectorios)" },
          { cmd: "ls *.csv", desc: "Solo archivos que terminen en .csv (wildcard *)" },
        ],
      },
      {
        type: "example",
        title: "Leyendo la salida de ls -la",
        content: `$ ls -la
total 32
drwxr-xr-x  4 usuario usuario 4096 abr 13 10:30 .
drwxr-xr-x 12 usuario usuario 4096 abr 12 09:15 ..
-rw-r--r--  1 usuario usuario  220 abr 10 08:00 .bashrc
-rw-r--r--  1 usuario usuario 1205 abr 13 10:30 datos.csv
drwxr-xr-x  2 usuario usuario 4096 abr 11 14:22 scripts
-rwxr-xr-x  1 usuario usuario  890 abr 12 16:45 analisis.py

│││││││││
│││││││││
d│││││││└─ Nombre del archivo
││││││└──── Fecha de última modificación
│││││└───── Tamaño en bytes
││││└────── Grupo
│││└─────── Dueño
││└──────── Número de links
│└───────── Permisos (rwx = read/write/execute)
└────────── Tipo: d=directorio, -=archivo, l=link`,
      },
      {
        type: "commands",
        title: "cd — Cambiar de directorio",
        items: [
          { cmd: "cd /var/log", desc: "Ir a una ruta absoluta" },
          { cmd: "cd scripts", desc: "Entrar a una subcarpeta" },
          { cmd: "cd ..", desc: "Subir un nivel" },
          { cmd: "cd ../..", desc: "Subir dos niveles" },
          { cmd: "cd ~", desc: "Ir a tu HOME" },
          { cmd: "cd", desc: "Sin argumentos = ir a HOME (atajo)" },
          { cmd: "cd -", desc: "Volver al directorio anterior" },
        ],
      },
      {
        type: "curiosity",
        text: "Presiona TAB para autocompletar nombres de archivos y directorios. Presiona TAB dos veces para ver todas las opciones disponibles. Usa las flechas ↑↓ para navegar por el historial de comandos. Ctrl+R te permite buscar en tu historial escribiendo parte del comando.",
      },
    ],
  },
  {
    id: "files",
    icon: "📁",
    title: "Archivos y Directorios: mkdir, cp, mv, rm",
    subtitle: "Crear, copiar, mover y eliminar",
    intro: "Estos comandos reemplazan todo lo que harías con click derecho en Windows. Son más rápidos, más potentes, y se pueden automatizar.",
    blocks: [
      {
        type: "commands",
        title: "mkdir — Crear directorios",
        items: [
          { cmd: "mkdir mi_proyecto", desc: "Crear una carpeta" },
          { cmd: "mkdir -p data/raw/2026/q1", desc: "-p crea toda la cadena de carpetas padres si no existen" },
          { cmd: "mkdir scripts tests docs", desc: "Crear múltiples carpetas a la vez" },
          { cmd: "mkdir -p proyecto/{src,tests,docs,data}", desc: "Crear estructura completa con expansión de llaves" },
        ],
      },
      {
        type: "commands",
        title: "cp — Copiar archivos y directorios",
        items: [
          { cmd: "cp archivo.txt copia.txt", desc: "Copiar un archivo" },
          { cmd: "cp archivo.txt ~/backup/", desc: "Copiar a otro directorio" },
          { cmd: "cp -r carpeta/ carpeta_backup/", desc: "-r = recursivo (obligatorio para directorios)" },
          { cmd: "cp -i archivo.txt destino/", desc: "-i = preguntar antes de sobreescribir" },
          { cmd: "cp *.py scripts/", desc: "Copiar todos los .py al directorio scripts/" },
          { cmd: "cp -v datos.csv backup/", desc: "-v = verbose (muestra qué se copió)" },
        ],
      },
      {
        type: "commands",
        title: "mv — Mover y renombrar",
        items: [
          { cmd: "mv viejo.txt nuevo.txt", desc: "Renombrar un archivo" },
          { cmd: "mv archivo.txt ~/Documents/", desc: "Mover a otro directorio" },
          { cmd: "mv carpeta/ /tmp/", desc: "Mover una carpeta completa" },
          { cmd: "mv *.csv data/", desc: "Mover todos los CSV a data/" },
          { cmd: "mv -i origen destino", desc: "-i = confirmar antes de sobreescribir" },
        ],
      },
      {
        type: "commands",
        title: "rm — Eliminar (¡sin papelera!)",
        items: [
          { cmd: "rm archivo.txt", desc: "Eliminar un archivo (no hay vuelta atrás)" },
          { cmd: "rm -i archivo.txt", desc: "-i = pedir confirmación antes de borrar" },
          { cmd: "rm -r carpeta/", desc: "-r = borrar directorio y todo su contenido" },
          { cmd: "rm -rf carpeta/", desc: "-rf = forzar borrado recursivo sin preguntar" },
          { cmd: "rmdir carpeta_vacia/", desc: "rmdir solo borra directorios VACÍOS (más seguro)" },
        ],
      },
      {
        type: "warning",
        text: "⚠ rm NO tiene papelera de reciclaje. Lo que borras, desaparece. Nunca ejecutes 'rm -rf /' ni 'rm -rf ~'. Siempre usa 'rm -i' o verifica con 'ls' antes de borrar. Un truco de seguridad: usa 'ls' con el mismo patrón antes de 'rm'. Si 'ls *.tmp' muestra lo correcto, entonces 'rm *.tmp' es seguro.",
      },
      {
        type: "curiosity",
        text: "El comando 'mv' en realidad no mueve datos — si el origen y destino están en el mismo filesystem, solo actualiza la referencia en la tabla de inodos. Por eso mover un archivo de 10GB dentro del mismo disco es instantáneo, pero copiarlo toma minutos.",
      },
    ],
  },
  {
    id: "text",
    icon: "📄",
    title: "Manipulación de Texto: cat, head, tail, less",
    subtitle: "Leer, inspeccionar y explorar archivos",
    intro: "Linux fue diseñado por y para gente que trabaja con texto. Estos comandos te permiten inspeccionar archivos sin abrirlos en un editor, lo cual es esencial cuando trabajas con logs, CSVs, o datos.",
    blocks: [
      {
        type: "commands",
        title: "cat — Concatenar y mostrar",
        items: [
          { cmd: "cat archivo.txt", desc: "Mostrar todo el contenido del archivo" },
          { cmd: "cat -n archivo.txt", desc: "-n = mostrar números de línea" },
          { cmd: "cat archivo1.txt archivo2.txt", desc: "Concatenar dos archivos (mostrarlos seguidos)" },
          { cmd: "cat archivo1.txt archivo2.txt > combinado.txt", desc: "Concatenar y guardar en nuevo archivo" },
          { cmd: "cat > notas.txt", desc: "Crear archivo escribiendo directo (Ctrl+D para terminar)" },
          { cmd: "cat >> notas.txt", desc: "Agregar texto al final de un archivo existente" },
        ],
      },
      {
        type: "commands",
        title: "head — Ver el inicio",
        items: [
          { cmd: "head archivo.csv", desc: "Primeras 10 líneas (por defecto)" },
          { cmd: "head -n 5 archivo.csv", desc: "Primeras 5 líneas" },
          { cmd: "head -n 1 datos.csv", desc: "Solo el header de un CSV" },
          { cmd: "head -c 100 archivo.txt", desc: "Primeros 100 bytes" },
        ],
      },
      {
        type: "commands",
        title: "tail — Ver el final",
        items: [
          { cmd: "tail archivo.log", desc: "Últimas 10 líneas (por defecto)" },
          { cmd: "tail -n 20 archivo.log", desc: "Últimas 20 líneas" },
          { cmd: "tail -f /var/log/syslog", desc: "-f = follow (monitorear en tiempo real)" },
          { cmd: "tail -f -n 50 app.log", desc: "Últimas 50 líneas + seguir nuevas" },
          { cmd: "tail -n +2 datos.csv", desc: "Desde la línea 2 en adelante (saltar header)" },
        ],
      },
      {
        type: "commands",
        title: "less — Navegador interactivo",
        items: [
          { cmd: "less archivo_grande.log", desc: "Abrir archivo para navegar interactivamente" },
        ],
      },
      {
        type: "example",
        title: "Controles dentro de less",
        content: `Dentro de less puedes usar:

  ESPACIO  o  f     → Avanzar una página
  b                 → Retroceder una página
  g                 → Ir al inicio del archivo
  G                 → Ir al final del archivo
  /patrón           → Buscar texto hacia adelante
  ?patrón           → Buscar texto hacia atrás
  n                 → Siguiente resultado de búsqueda
  N                 → Resultado anterior
  q                 → Salir de less
  -N  luego ENTER   → Mostrar/ocultar números de línea
  h                 → Ayuda completa`,
      },
      {
        type: "commands",
        title: "Otros comandos de texto útiles",
        items: [
          { cmd: "wc -l archivo.txt", desc: "Contar líneas de un archivo" },
          { cmd: "wc -w archivo.txt", desc: "Contar palabras" },
          { cmd: "sort datos.txt", desc: "Ordenar líneas alfabéticamente" },
          { cmd: "sort -n numeros.txt", desc: "Ordenar numéricamente" },
          { cmd: "uniq -c sorted.txt", desc: "Contar ocurrencias de líneas repetidas (requiere sort antes)" },
          { cmd: "grep 'error' app.log", desc: "Buscar líneas que contienen 'error'" },
          { cmd: "grep -i 'warning' app.log", desc: "-i = ignorar mayúsculas/minúsculas" },
          { cmd: "grep -rn 'TODO' src/", desc: "-rn = buscar recursivamente con números de línea" },
        ],
      },
      {
        type: "curiosity",
        text: "El nombre 'less' es un juego de palabras: 'less is more'. El comando 'more' existía primero pero solo podías avanzar, no retroceder. Crearon 'less' como mejora, y le pusieron ese nombre porque 'less is more than more'. Humor de programador de los 80s.",
      },
    ],
  },
  {
    id: "pipes",
    icon: "🔗",
    title: "Pipes y Redirección",
    subtitle: "El superpoder de la terminal",
    intro: "Los pipes (|) conectan la salida de un comando con la entrada de otro, creando pipelines poderosos. La redirección (>, >>) envía la salida a archivos. Esto es lo que hace a la terminal invencible.",
    blocks: [
      {
        type: "commands",
        title: "Operadores de redirección",
        items: [
          { cmd: "echo 'hola' > archivo.txt", desc: "> = escribir en archivo (sobreescribe)" },
          { cmd: "echo 'más texto' >> archivo.txt", desc: ">> = agregar al final (append)" },
          { cmd: "comando 2> errores.log", desc: "2> = redirigir errores a un archivo" },
          { cmd: "comando > todo.log 2>&1", desc: "Redirigir salida + errores al mismo archivo" },
          { cmd: "comando < input.txt", desc: "< = usar archivo como entrada del comando" },
        ],
      },
      {
        type: "commands",
        title: "Pipe |  — Encadenar comandos",
        items: [
          { cmd: "ls -la | less", desc: "Navegar listado largo con less" },
          { cmd: "cat datos.csv | head -5", desc: "Ver primeras 5 líneas de un CSV" },
          { cmd: "cat datos.csv | wc -l", desc: "Contar cuántas filas tiene un CSV" },
          { cmd: "history | grep 'git'", desc: "Buscar comandos git en tu historial" },
          { cmd: "cat log.txt | sort | uniq -c | sort -rn | head", desc: "Top 10 líneas más frecuentes de un log" },
          { cmd: "ls -lS | head -5", desc: "Los 5 archivos más grandes del directorio" },
          { cmd: "grep 'ERROR' app.log | wc -l", desc: "Contar cuántos errores hay en un log" },
          { cmd: "cat precios.csv | tail -n +2 | sort -t',' -k3 -rn | head", desc: "Top filas por la 3ra columna de un CSV" },
        ],
      },
      {
        type: "curiosity",
        text: "La filosofía Unix dice: 'Haz una cosa y hazla bien.' Cada comando hace UNA tarea simple, y los pipes te permiten combinarlos como piezas de LEGO para resolver problemas complejos. Un pipeline de 5 comandos reemplaza lo que en otros lenguajes requeriría 50 líneas de código.",
      },
    ],
  },
  AWK_SECTION,
  {
    id: "shortcuts",
    icon: "⌨",
    title: "Atajos y Trucos Pro",
    subtitle: "Productividad al máximo",
    intro: "Estos atajos separan al principiante del usuario avanzado. Memorizarlos te ahorrará horas.",
    blocks: [
      {
        type: "commands",
        title: "Atajos de teclado esenciales",
        items: [
          { cmd: "TAB", desc: "Autocompletar nombre de archivo/directorio/comando" },
          { cmd: "TAB TAB", desc: "Mostrar todas las opciones de autocompletado" },
          { cmd: "↑ / ↓", desc: "Navegar historial de comandos" },
          { cmd: "Ctrl + R", desc: "Buscar en historial (escribes parte del comando)" },
          { cmd: "Ctrl + C", desc: "Cancelar el comando actual" },
          { cmd: "Ctrl + D", desc: "Cerrar terminal / terminar input" },
          { cmd: "Ctrl + L", desc: "Limpiar pantalla (igual que 'clear')" },
          { cmd: "Ctrl + A", desc: "Ir al inicio de la línea" },
          { cmd: "Ctrl + E", desc: "Ir al final de la línea" },
          { cmd: "Ctrl + W", desc: "Borrar la palabra anterior" },
          { cmd: "Ctrl + U", desc: "Borrar todo a la izquierda del cursor" },
          { cmd: "Ctrl + K", desc: "Borrar todo a la derecha del cursor" },
        ],
      },
      {
        type: "commands",
        title: "Expansiones y comodines",
        items: [
          { cmd: "*", desc: "Cualquier cadena de caracteres: ls *.py" },
          { cmd: "?", desc: "Un solo carácter: ls archivo?.txt" },
          { cmd: "{a,b,c}", desc: "Expansión: mkdir {src,tests,docs}" },
          { cmd: "!!", desc: "Repetir último comando: sudo !!" },
          { cmd: "!grep", desc: "Repetir último comando que empezó con 'grep'" },
          { cmd: "$?", desc: "Código de salida del último comando (0=éxito)" },
        ],
      },
      {
        type: "commands",
        title: "Comandos de supervivencia",
        items: [
          { cmd: "man ls", desc: "Manual completo de cualquier comando" },
          { cmd: "ls --help", desc: "Ayuda rápida de un comando" },
          { cmd: "which python3", desc: "Dónde está instalado un programa" },
          { cmd: "whoami", desc: "Tu nombre de usuario actual" },
          { cmd: "date", desc: "Fecha y hora del sistema" },
          { cmd: "df -h", desc: "Espacio en disco disponible" },
          { cmd: "du -sh carpeta/", desc: "Tamaño total de una carpeta" },
          { cmd: "htop", desc: "Monitor de procesos interactivo (instalar: sudo apt install htop)" },
          { cmd: "history", desc: "Ver todo tu historial de comandos" },
          { cmd: "alias ll='ls -la'", desc: "Crear un atajo personalizado" },
        ],
      },
      {
        type: "curiosity",
        text: "Puedes poner alias permanentes en tu archivo ~/.bashrc. Cada vez que abres una terminal, bash lee este archivo. Es como tu archivo de configuración personal. Edítalo con: nano ~/.bashrc y agrega tus alias al final.",
      },
    ],
  },
];

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      style={{
        background: copied ? "#22c55e33" : "#ffffff08",
        border: `1px solid ${copied ? "#22c55e66" : "#ffffff15"}`,
        color: copied ? "#22c55e" : "#888",
        borderRadius: 4,
        padding: "2px 8px",
        fontSize: 11,
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "all .2s",
        flexShrink: 0,
      }}
    >
      {copied ? "✓" : "copy"}
    </button>
  );
}

function CommandBlock({ cmd, desc, output }) {
  return (
    <div style={{ marginBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#22c55e", opacity: 0.6, userSelect: "none" }}>$</span>
            <code style={{ color: "#e2e8f0", fontSize: 13.5, wordBreak: "break-all" }}>{cmd}</code>
            <CopyBtn text={cmd} />
          </div>
          <div style={{ color: "#94a3b8", fontSize: 12.5, marginLeft: 18, marginTop: 2 }}>{desc}</div>
        </div>
      </div>
      {output && (
        <div style={{
          background: "#0f172a",
          borderLeft: "2px solid #334155",
          marginLeft: 18,
          marginTop: 4,
          padding: "4px 10px",
          borderRadius: "0 4px 4px 0",
          color: "#64748b",
          fontSize: 12,
          fontStyle: "italic",
        }}>
          → {output}
        </div>
      )}
    </div>
  );
}

function Block({ block }) {
  if (block.type === "commands") {
    return (
      <div style={{ marginBottom: 20 }}>
        <h4 style={{ color: "#f8fafc", fontSize: 14, fontWeight: 600, marginBottom: 10, letterSpacing: 0.3 }}>
          {block.title}
        </h4>
        <div style={{
          background: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: 8,
          padding: "12px 14px",
        }}>
          {block.items.map((item, i) => (
            <CommandBlock key={i} {...item} />
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "steps") {
    return (
      <div style={{ marginBottom: 20 }}>
        <h4 style={{ color: "#f8fafc", fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{block.title}</h4>
        {block.items.map((step, i) => (
          <div key={i} style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: 8,
            padding: "12px 14px",
            marginBottom: 8,
          }}>
            <div style={{ color: "#cbd5e1", fontSize: 13, marginBottom: 6 }}>{step.label}</div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <pre style={{
                flex: 1,
                margin: 0,
                padding: "8px 10px",
                background: "#020617",
                borderRadius: 6,
                color: "#22c55e",
                fontSize: 13,
                overflow: "auto",
                whiteSpace: "pre-wrap",
              }}>{step.cmd}</pre>
              <CopyBtn text={step.cmd.split("\n")[0]} />
            </div>
            {step.note && (
              <div style={{ color: "#64748b", fontSize: 12, marginTop: 6, fontStyle: "italic" }}>{step.note}</div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "tree" || block.type === "example") {
    return (
      <div style={{ marginBottom: 20 }}>
        <h4 style={{ color: "#f8fafc", fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{block.title}</h4>
        <pre style={{
          background: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: 8,
          padding: "14px 16px",
          color: "#94a3b8",
          fontSize: 12.5,
          lineHeight: 1.6,
          overflow: "auto",
          whiteSpace: "pre-wrap",
          margin: 0,
        }}>{block.content}</pre>
      </div>
    );
  }

  if (block.type === "curiosity") {
    return (
      <div style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #172554 100%)",
        border: "1px solid #312e81",
        borderRadius: 8,
        padding: "12px 14px",
        marginBottom: 20,
      }}>
        <div style={{ color: "#a5b4fc", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
          💡 Dato curioso
        </div>
        <div style={{ color: "#c7d2fe", fontSize: 13, lineHeight: 1.6 }}>{block.text}</div>
      </div>
    );
  }

  if (block.type === "warning") {
    return (
      <div style={{
        background: "linear-gradient(135deg, #451a03 0%, #7c2d12 100%)",
        border: "1px solid #9a3412",
        borderRadius: 8,
        padding: "12px 14px",
        marginBottom: 20,
      }}>
        <div style={{ color: "#fdba74", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
          Peligro
        </div>
        <div style={{ color: "#fed7aa", fontSize: 13, lineHeight: 1.6 }}>{block.text}</div>
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div style={{ marginBottom: 20 }}>
        <h4 style={{ color: "#f8fafc", fontSize: 14, fontWeight: 600, marginBottom: 10, letterSpacing: 0.3 }}>
          {block.title}
        </h4>
        <div style={{ overflowX: "auto", borderRadius: 8, border: "1px solid #1e293b" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} style={{
                    background: "#1e293b",
                    color: "#94a3b8",
                    padding: "8px 14px",
                    textAlign: "left",
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    fontSize: 11,
                    borderBottom: "1px solid #334155",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#0f172a" : "#020617" }}>
                  <td style={{
                    padding: "7px 14px",
                    borderBottom: "1px solid #1e293b",
                    fontFamily: "'JetBrains Mono','Fira Code',monospace",
                    color: "#22c55e",
                    whiteSpace: "nowrap",
                  }}>{row[0]}</td>
                  <td style={{
                    padding: "7px 14px",
                    borderBottom: "1px solid #1e293b",
                    color: "#cbd5e1",
                  }}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return null;
}

function CheatSheet() {
  const allCmds = [];
  SECTIONS.forEach((s) => {
    s.blocks.forEach((b) => {
      if (b.type === "commands") {
        b.items.forEach((item) => {
          allCmds.push({ cmd: item.cmd, desc: item.desc, section: s.title });
        });
      }
    });
  });

  const [filter, setFilter] = useState("");
  const filtered = filter
    ? allCmds.filter((c) => c.cmd.toLowerCase().includes(filter.toLowerCase()) || c.desc.toLowerCase().includes(filter.toLowerCase()))
    : allCmds;

  return (
    <div>
      <div style={{
        position: "sticky",
        top: 0,
        background: "#0f172a",
        padding: "12px 0",
        zIndex: 10,
        borderBottom: "1px solid #1e293b",
        marginBottom: 12,
      }}>
        <input
          type="text"
          placeholder="Buscar comando..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 14px",
            background: "#020617",
            border: "1px solid #334155",
            borderRadius: 8,
            color: "#e2e8f0",
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <div style={{ color: "#64748b", fontSize: 12, marginTop: 6 }}>
          {filtered.length} comando{filtered.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div style={{
        background: "#020617",
        border: "1px solid #1e293b",
        borderRadius: 8,
        overflow: "hidden",
      }}>
        {filtered.map((c, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: "8px 12px",
              borderBottom: i < filtered.length - 1 ? "1px solid #0f172a" : "none",
              background: i % 2 === 0 ? "transparent" : "#0f172a33",
            }}
          >
            <code style={{
              color: "#22c55e",
              fontSize: 12.5,
              minWidth: 0,
              flexShrink: 0,
              maxWidth: "50%",
              wordBreak: "break-all",
            }}>{c.cmd}</code>
            <span style={{ color: "#64748b", fontSize: 12, flex: 1 }}>{c.desc}</span>
            <CopyBtn text={c.cmd} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BashCourse() {
  const [activeSection, setActiveSection] = useState("wsl");
  const [mode, setMode] = useState("course");

  const section = SECTIONS.find((s) => s.id === activeSection);

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', monospace",
      background: "#0f172a",
      color: "#e2e8f0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
        borderBottom: "1px solid #1e293b",
        padding: "16px 20px 12px",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div>
            <div style={{ color: "#22c55e", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>
              ~/curso
            </div>
            <h1 style={{ fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: -0.5 }}>
              <span style={{ color: "#22c55e" }}>bash</span>
              <span style={{ color: "#475569" }}>@</span>
              <span style={{ color: "#f8fafc" }}>terminal</span>
            </h1>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {["course", "cheatsheet"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "1px solid",
                  borderColor: mode === m ? "#22c55e55" : "#1e293b",
                  background: mode === m ? "#22c55e15" : "transparent",
                  color: mode === m ? "#22c55e" : "#64748b",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {m === "course" ? "Curso" : "Cheat Sheet"}
              </button>
            ))}
          </div>
        </div>

        {mode === "course" && (
          <div style={{
            display: "flex",
            gap: 4,
            overflowX: "auto",
            paddingBottom: 4,
            scrollbarWidth: "none",
          }}>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                style={{
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "none",
                  background: activeSection === s.id ? "#1e293b" : "transparent",
                  color: activeSection === s.id ? "#f8fafc" : "#64748b",
                  fontSize: 12,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  transition: "all .15s",
                }}
              >
                <span style={{ fontSize: 13 }}>{s.icon}</span>
                <span>{s.title.split(":")[0].split("—")[0].split("/")[0].trim()}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", padding: "16px 20px 40px" }}>
        {mode === "cheatsheet" ? (
          <CheatSheet />
        ) : (
          section && (
            <div>
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px", color: "#f8fafc" }}>
                  {section.icon} {section.title}
                </h2>
                <div style={{ color: "#22c55e", fontSize: 12, fontWeight: 600, marginBottom: 8, letterSpacing: 0.3 }}>
                  {section.subtitle}
                </div>
                <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{section.intro}</p>
              </div>

              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}

              {/* Nav */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 24,
                paddingTop: 16,
                borderTop: "1px solid #1e293b",
              }}>
                {SECTIONS.indexOf(section) > 0 ? (
                  <button
                    onClick={() => setActiveSection(SECTIONS[SECTIONS.indexOf(section) - 1].id)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 6,
                      border: "1px solid #1e293b",
                      background: "transparent",
                      color: "#94a3b8",
                      fontSize: 12,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    ← {SECTIONS[SECTIONS.indexOf(section) - 1].title.split(":")[0].trim()}
                  </button>
                ) : <div />}
                {SECTIONS.indexOf(section) < SECTIONS.length - 1 ? (
                  <button
                    onClick={() => setActiveSection(SECTIONS[SECTIONS.indexOf(section) + 1].id)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 6,
                      border: "1px solid #22c55e44",
                      background: "#22c55e15",
                      color: "#22c55e",
                      fontSize: 12,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontWeight: 600,
                    }}
                  >
                    {SECTIONS[SECTIONS.indexOf(section) + 1].title.split(":")[0].trim()} →
                  </button>
                ) : (
                  <button
                    onClick={() => setMode("cheatsheet")}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 6,
                      border: "1px solid #22c55e44",
                      background: "#22c55e15",
                      color: "#22c55e",
                      fontSize: 12,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontWeight: 600,
                    }}
                  >
                    Ver Cheat Sheet →
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

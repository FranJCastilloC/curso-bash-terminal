# Curso de Introducción a la Terminal y Línea de Comandos
## Documento Maestro — 26 Módulos Completos

**Plataforma:** Platzi | **Instructor:** Enrique Devars
**Duración:** 4h contenido + 14h práctica | **Nivel:** Básico
**URL:** https://platzi.com/cursos/terminal/

---

## Mapa del Curso

| Sección | Módulos | Temas clave |
|---------|---------|-------------|
| Introducción a la terminal | 1–4 | Ventajas, conceptos, instalación WSL, comandos básicos |
| Archivos y directorios | 5–7 | Navegación, CRUD de archivos, manipulación de texto |
| Búsqueda en la terminal | 8–9 | Wildcards, grep, find |
| Funcionamiento de la terminal | 10–13 | Tipos de comandos, redirecciones, operadores, alias |
| Sistema operativo | 14–19 | Permisos, variables de entorno, APT, Homebrew, procesos |
| Utilidades del sistema | 20–23 | tar/gzip, Vim/Nano, tmux, comandos de red |
| Bonus | 24–26 | ZSH/Oh My Zsh, Warp, recursos |

---
---

# SECCIÓN 1: INTRODUCCIÓN A LA TERMINAL

---

## Módulo 1 — Ventajas de dominar la terminal de comandos para profesionales

**Clase:** 02:07 min

### Resumen Platzi

Dominar la terminal de comandos es una habilidad estratégica para cualquier profesional técnico. Lejos de ser algo anticuado, conocer esta herramienta aporta velocidad, precisión y un conocimiento profundo sobre el funcionamiento interno de sistemas operativos y aplicaciones. Con la terminal, automatizas tareas en segundos y accedes a herramientas avanzadas, ganando control total sobre tu entorno digital.

### Contenido detallado

**Ventajas principales:**

- **Velocidad y precisión:** Ejecutar en segundos operaciones que en interfaces gráficas toman horas.
- **Automatización de tareas repetitivas:** Acortar considerablemente el tiempo dedicado a procesos manuales mediante scripts.
- **Control total y preciso del sistema:** Conocer exactamente qué ocurre al ejecutar un comando.
- **Conocimiento profundo del SO:** Comprender cómo se mueve la información, cómo se gestionan archivos, directorios y procesos internos.
- **Acceso a herramientas avanzadas:** Git (control de versiones), Docker (contenedores), Htop (monitoreo de procesos), Nmap (análisis de redes).
- **Personalización extrema:** Scripts propios, flujos de trabajo personalizados, ambiente digital a medida.

**Compatibilidad:** Windows, Linux, macOS e incluso dispositivos móviles.

**Impacto laboral:** Empresas como Google, Amazon, Facebook y Red Hat consideran esta habilidad básica e imprescindible.

---

## Módulo 2 — Qué es una terminal y cómo funciona con comandos básicos

**Clase:** 04:04 min

### Resumen Platzi

Una terminal es básicamente una interfaz de usuario que facilita la comunicación con el sistema operativo mediante comandos específicos. Estos comandos permiten realizar acciones concretas como crear, copiar o eliminar archivos, además de administrar procesos y otras tareas de configuración. El funcionamiento se apoya en un programa llamado shell, que interpreta los comandos y los traduce en instrucciones que el sistema operativo puede ejecutar.

### Contenido detallado

**Diferencias clave:**

| Concepto | Definición |
|----------|-----------|
| **Terminal** | La interfaz (ventana) donde escribes comandos. Es el intermediario visual. |
| **Consola** | La interfaz física o virtual que conecta al usuario con el sistema. Históricamente era hardware. |
| **Shell** | El intérprete de comandos que ejecuta lo que escribes. Ejemplos: bash, zsh, fish, sh. |
| **Comando** | Una instrucción textual que el shell interpreta y ejecuta. |

**Flujo de ejecución:**

```
Usuario escribe comando en Terminal
  → Terminal envía al Shell (bash/zsh)
    → Shell interpreta y ejecuta
      → Sistema Operativo responde
        → Shell muestra resultado en Terminal
```

**Anatomía de un comando:**

```bash
comando -opciones argumentos

# Ejemplo:
ls -la /home/usuario
#  │   │   └── argumento (sobre qué actuar)
#  │   └────── opciones/flags (modifican el comportamiento)
#  └────────── comando (la acción a ejecutar)
```

**Shells más comunes:**

| Shell | Ruta | Descripción |
|-------|------|-------------|
| bash | /bin/bash | Bourne Again Shell. Estándar en Linux. |
| zsh | /bin/zsh | Z Shell. Default en macOS. Más features. |
| fish | /usr/bin/fish | Friendly Interactive Shell. Autocompletado visual. |
| sh | /bin/sh | Bourne Shell original. Mínimo, scripts portables. |

**Tareas típicas desde la shell:** Crear, copiar, eliminar archivos. Administrar procesos. Navegar y listar directorios. Configurar el sistema.

```bash
echo $SHELL        # Ver qué shell estás usando
cat /etc/shells    # Ver shells disponibles en el sistema
```

---

## Módulo 3 — Instalación de terminal Bash en Windows usando WSL

**Clase:** 06:53 min

### Resumen Platzi

Windows Subsystem for Linux (WSL) es una utilidad de Microsoft que permite ejecutar un sistema operativo Linux directamente desde Windows sin necesidad de máquinas virtuales. Funciona en Windows 10 versión 2004+ y Windows 11. Incluye por defecto Ubuntu (basada en Debian). Ofrece la flexibilidad de trabajar con comandos Linux directamente desde el entorno Windows.

### Contenido detallado

**Instalación paso a paso:**

```powershell
# 1. Abrir PowerShell como Administrador:
wsl --install
# Instala Ubuntu por defecto. Reiniciar el PC cuando termine.

# 2. Después de reiniciar, Ubuntu se abre automáticamente.
#    Crear usuario y contraseña UNIX.

# 3. Actualizar paquetes del sistema:
sudo apt update && sudo apt upgrade -y
```

**Comandos WSL útiles (desde PowerShell):**

```powershell
wsl --list --verbose          # Ver distribuciones instaladas
wsl --set-default Ubuntu      # Establecer distro por defecto
wsl --shutdown                # Apagar todas las instancias
wsl -d Ubuntu                 # Iniciar distribución específica
wsl --install -d Debian       # Instalar otra distribución
wsl --status                  # Ver estado del WSL
```

**Acceso entre sistemas de archivos:**

```bash
# Desde WSL → acceder a Windows:
ls /mnt/c/Users/              # Discos Windows montados en /mnt/
cd /mnt/d/proyectos/

# Desde Windows → acceder a WSL:
# En Explorador: \\wsl$\Ubuntu\home\tu_usuario
```

**Dato técnico:** WSL2 usa un kernel Linux real compilado por Microsoft corriendo en una microVM ultraligera con Hyper-V. No es emulación — es Linux real.

---

## Módulo 4 — Comandos básicos de terminal para principiantes

**Clase:** 09:50 min

### Resumen Platzi

Conociendo comandos básicos como whoami, pwd, ls y clear puedes simplificar considerablemente muchas tareas. Detectar tu usuario actual, mostrar dónde están almacenados tus archivos o visualizar información clave del sistema son acciones que estos comandos permiten realizar fácilmente.

### Contenido detallado

```bash
# ─── ORIENTACIÓN ───
whoami                    # Nombre de usuario activo
pwd                       # Print Working Directory: ¿dónde estoy?
date                      # Fecha y hora del sistema
hostname                  # Nombre de la máquina

# ─── LISTAR CONTENIDO ───
ls                        # Listar archivos y carpetas
ls -l                     # Formato largo (permisos, dueño, tamaño, fecha)
ls -a                     # Incluir archivos ocultos (empiezan con .)
ls -la                    # Combinar: largo + ocultos
ls -lh                    # Tamaños legibles (KB, MB, GB)
ls -lt                    # Ordenar por fecha de modificación
ls -lS                    # Ordenar por tamaño

# ─── UTILIDADES ───
clear                     # Limpiar pantalla (o Ctrl + L)
history                   # Ver historial de comandos
man <comando>             # Manual completo
<comando> --help          # Ayuda rápida
```

**Leyendo la salida de `ls -la`:**

```
drwxr-xr-x  4 usuario usuario 4096 abr 13 10:30 proyectos
-rw-r--r--  1 usuario usuario 1205 abr 13 10:30 datos.csv

# d = directorio, - = archivo, l = link simbólico
# rwx = lectura/escritura/ejecución (dueño, grupo, otros)
# Después: links, dueño, grupo, tamaño, fecha, nombre
```

---
---

# SECCIÓN 2: ARCHIVOS Y DIRECTORIOS

---

## Módulo 5 — Navegación entre directorios en Linux

**Clase:** 11:37 min

### Resumen Platzi

Dominar la navegación entre directorios es fundamental. Se usan rutas absolutas (desde la raíz /) y relativas (desde el directorio actual). Símbolos clave: punto (.) para directorio actual, doble punto (..) para subir un nivel, virgulilla (~) para home. Los comandos pushd y popd permiten almacenar temporalmente una ubicación y regresar a ella, útiles para trabajar en múltiples directorios simultáneamente.

### Contenido detallado

**Símbolos de navegación:**

| Símbolo | Significado | Ejemplo |
|---------|------------|---------|
| `/` | Raíz del sistema | `cd /` |
| `.` | Directorio actual | `./script.sh` |
| `..` | Directorio padre | `cd ..` |
| `~` | Home del usuario | `cd ~/Documents` |
| `-` | Directorio anterior | `cd -` |

**Rutas absolutas vs relativas:**

```bash
# ABSOLUTA: empieza desde la raíz /
cd /home/usuario/proyectos/data

# RELATIVA: parte del directorio actual
cd proyectos/data

# Combinando con ..
cd ../../otro_proyecto         # Subir 2 niveles y entrar
```

**pushd y popd — Pila de directorios:**

```bash
pushd /var/log                 # Guarda ubicación actual, va a /var/log
pushd /etc                     # Guarda /var/log, va a /etc
popd                           # Vuelve a /var/log
popd                           # Vuelve al directorio original
dirs                           # Ver la pila de directorios
```

**Estructura del filesystem de Linux:**

```
/                    ← Raíz absoluta
├── home/            ← Carpetas personales de usuarios
│   └── usuario/   ← Tu HOME (~)
├── etc/             ← Configuración del sistema
├── var/             ← Datos variables (logs, cache)
│   └── log/         ← Logs del sistema
├── tmp/             ← Temporales (se borran al reiniciar)
├── usr/             ← Programas y utilidades
│   ├── bin/         ← Binarios de usuario
│   └── lib/         ← Librerías compartidas
├── bin/             ← Comandos esenciales
├── dev/             ← Dispositivos (discos, USB)
├── proc/            ← Info del kernel y procesos en tiempo real
├── root/            ← Home del superusuario
└── mnt/             ← Puntos de montaje (WSL monta C:\ aquí)
```

**Trucos de navegación:**

```bash
# Autocompletar con TAB
cd Doc[TAB]                    # → Documents/
cd D[TAB][TAB]                 # Muestra: Desktop/ Documents/ Downloads/

# Historial
↑ ↓                            # Navegar comandos previos
Ctrl + R                       # Buscar en historial
```

---

## Módulo 6 — Comandos Linux para crear, mover, copiar y eliminar archivos

**Clase:** 13:07 min

### Resumen Platzi

Manejar archivos y directorios desde la terminal es esencial para quienes trabajan con grandes volúmenes de datos. Los archivos se crean con touch, los directorios con mkdir (con flag -p para crear subcarpetas simultáneamente). Mover y renombrar se hace con mv. Copiar con cp (con -r para directorios). Eliminar con rm (con -r para directorios y -f para forzar). No existe papelera en la terminal — se recomienda verificar antes de borrar.

### Contenido detallado

```bash
# ─── CREAR ───
touch archivo.txt                         # Crear archivo vacío
touch file1.txt file2.txt file3.txt       # Crear múltiples
mkdir proyecto                            # Crear directorio
mkdir -p data/raw/2026/q1                 # Crear cadena completa de carpetas
mkdir -p proyecto/{src,tests,docs,data}   # Estructura con expansión de llaves

# ─── COPIAR ───
cp archivo.txt copia.txt                  # Copiar archivo
cp archivo.txt ~/backup/                  # Copiar a otro directorio
cp -r carpeta/ carpeta_backup/            # -r = recursivo (obligatorio para dirs)
cp -i archivo.txt destino/               # -i = preguntar antes de sobreescribir
cp *.py scripts/                          # Copiar todos los .py
cp -v datos.csv backup/                  # -v = verbose

# ─── MOVER Y RENOMBRAR ───
mv viejo.txt nuevo.txt                    # Renombrar
mv archivo.txt ~/Documents/              # Mover a otro directorio
mv carpeta/ /tmp/                         # Mover carpeta completa
mv *.csv data/                            # Mover todos los CSV
mv -i origen destino                     # -i = confirmar antes de sobreescribir

# ─── ELIMINAR (SIN PAPELERA) ───
rm archivo.txt                            # Eliminar archivo (irreversible)
rm -i archivo.txt                         # -i = pedir confirmación
rm -r carpeta/                            # -r = borrar directorio y contenido
rm -rf carpeta/                           # -rf = forzar sin preguntar
rmdir carpeta_vacia/                      # Solo borra directorios VACÍOS (más seguro)

# ─── SEGURIDAD: verificar con ls antes de borrar ───
ls *.tmp                                  # Verificar qué vas a borrar
rm *.tmp                                  # Ahora sí
```

**PELIGRO:** `rm` NO tiene papelera de reciclaje. Nunca ejecutar `rm -rf /` ni `rm -rf ~`. Siempre usar `rm -i` o verificar con `ls` primero.

**Dato técnico:** `mv` dentro del mismo filesystem no mueve datos — solo actualiza la referencia en la tabla de inodos. Mover 10GB en el mismo disco es instantáneo; copiarlo toma minutos.

---

## Módulo 7 — Exploración y manipulación de archivos de texto

**Clase:** 12:16 min

### Resumen Platzi

Los archivos de texto plano son esenciales al procesar datos. Los comandos cat, less, head, tail, nl, wc y awk permiten manipulación efectiva. cat muestra todo el contenido instantáneamente. less presenta una interfaz interactiva navegable. head y tail muestran inicio y final respectivamente. nl numera las líneas. wc cuenta líneas/palabras. awk es una herramienta poderosa para manipular CSVs.

### Contenido detallado

```bash
# ─── cat: Concatenar y mostrar ───
cat archivo.txt                           # Mostrar todo el contenido
cat -n archivo.txt                        # Con números de línea
cat archivo1.txt archivo2.txt             # Concatenar
cat a.txt b.txt > combinado.txt           # Concatenar y guardar
cat > notas.txt                           # Crear escribiendo (Ctrl+D para terminar)
cat >> notas.txt                          # Agregar al final (append)

# ─── head: Ver el inicio ───
head archivo.csv                          # Primeras 10 líneas (default)
head -n 5 archivo.csv                     # Primeras 5 líneas
head -n 1 datos.csv                       # Solo el header de un CSV
head -c 100 archivo.txt                   # Primeros 100 bytes

# ─── tail: Ver el final ───
tail archivo.log                          # Últimas 10 líneas
tail -n 20 archivo.log                    # Últimas 20 líneas
tail -f /var/log/syslog                   # -f = follow (TIEMPO REAL)
tail -f -n 50 app.log                     # Últimas 50 + seguir nuevas
tail -n +2 datos.csv                      # Desde línea 2 (saltar header)

# ─── less: Navegador interactivo ───
less archivo_grande.log                   # Abrir para navegar
```

**Controles dentro de less:**

| Tecla | Acción |
|-------|--------|
| `ESPACIO` / `f` | Avanzar una página |
| `b` | Retroceder una página |
| `g` | Ir al inicio |
| `G` | Ir al final |
| `/patrón` | Buscar hacia adelante |
| `?patrón` | Buscar hacia atrás |
| `n` / `N` | Siguiente / anterior resultado |
| `q` | Salir |

```bash
# ─── Análisis de contenido ───
nl archivo.txt                            # Numerar líneas
wc archivo.txt                            # Contar líneas, palabras, caracteres
wc -l archivo.txt                         # Solo líneas
wc -w archivo.txt                         # Solo palabras
sort datos.txt                            # Ordenar alfabéticamente
sort -n numeros.txt                       # Ordenar numéricamente
sort -r datos.txt                         # Orden reverso
uniq -c sorted.txt                        # Contar ocurrencias (requiere sort antes)
sort archivo | uniq                       # Ordenar y eliminar duplicados

# ─── awk: Manipular CSVs ───
awk '{print $1}' archivo.csv              # Imprimir primera columna
awk -F"," '{print $1, $3}' archivo.csv    # Columnas 1 y 3 separadas por coma
```

**Dato curioso:** "less is more" — el comando `more` solo avanzaba. Crearon `less` como mejora porque "less is more than more".

---
---

# SECCIÓN 3: BÚSQUEDA EN LA TERMINAL

---

## Módulo 8 — Wildcards para búsquedas masivas

**Clase:** 09:46 min

### Resumen Platzi

Los wildcards son caracteres especiales (comodines) que permiten hacer coincidir patrones en nombres de archivos. Simplifican tareas repetitivas como listar, copiar o mover múltiples archivos. Funcionan con ls, cp, mv, rm, head, tail, grep y otros. Los principales tipos son: asterisco (*), signo de interrogación (?), corchetes ([]) y llaves ({}).

### Contenido detallado

| Wildcard | Significado | Ejemplo |
|----------|------------|---------|
| `*` | Cualquier cadena (0 o más caracteres) | `ls *.py` |
| `?` | Exactamente un carácter | `ls archivo?.txt` |
| `[]` | Un carácter del conjunto | `ls archivo[123].txt` |
| `[!]` / `[^]` | Un carácter que NO está en el conjunto | `ls archivo[!0-9].txt` |
| `{}` | Expansión de llaves (genera combinaciones) | `mkdir {src,tests,docs}` |

```bash
# ─── Asterisco * ───
ls *.csv                                  # Todos los CSV
ls datos*                                 # Todo lo que empieza con "datos"
ls *2026*                                 # Todo lo que contiene "2026"
cp *.py scripts/                          # Copiar todos los .py
rm *.tmp                                  # Borrar todos los temporales

# ─── Interrogación ? ───
ls file?.txt                              # file1.txt, fileA.txt (1 carácter)
ls ???.py                                 # Archivos .py con nombre de 3 caracteres

# ─── Corchetes [] ───
ls archivo[1-5].txt                       # archivo1 hasta archivo5
ls [A-Z]*.txt                             # Empiezan con mayúscula
ls *[o].*                                 # Tienen "o" antes del punto

# ─── Llaves {} ───
mkdir -p proyecto/{src,tests,docs,data}
touch archivo{1..10}.txt                  # archivo1.txt hasta archivo10.txt
cp config.{yml,yml.backup}               # Copiar renombrando
ls *.{md,log}                             # Archivos .md y .log

# ─── Ejemplo práctico: mover en lotes ───
mkdir backup
mv *.txt backup/
```

**Precaución:** Los wildcards pueden variar según la shell (bash, zsh). Siempre verificar el comando antes de ejecutarlo, especialmente con `rm`.

---

## Módulo 9 — Comandos GREP y FIND para búsquedas avanzadas

**Clase:** 08:59 min

### Resumen Platzi

GREP busca cadenas o patrones dentro del contenido de archivos. FIND localiza archivos o directorios por nombre, tipo, tamaño o fecha. Ambos usan expresiones regulares para búsquedas avanzadas. GREP facilita la obtención y filtrado de información. FIND permite localizar archivos según múltiples criterios desde una ubicación específica.

### Contenido detallado

```bash
# ═══════════════════════════════════════
# GREP — Buscar patrones DENTRO de archivos
# ═══════════════════════════════════════

# ─── Búsqueda básica ───
grep 'error' app.log                     # Líneas que contienen "error"
grep -i 'spider' marvel_wiki.csv         # -i = ignorar mayúsculas/minúsculas
grep -n 'TODO' script.py                 # -n = mostrar números de línea
grep -c 'spider' marvel_wiki.csv         # -c = contar ocurrencias
grep -v 'debug' app.log                  # -v = invertir (líneas que NO contienen)
grep -w 'port' config.yml               # -w = palabra completa (no "import")

# ─── Búsqueda recursiva ───
grep -r 'import pandas' src/            # -r = en todos los archivos del directorio
grep -rn 'def ' *.py                    # Recursivo + números de línea
grep -rl 'password' /etc/               # -l = solo nombres de archivos

# ─── Expresiones regulares ───
grep -E '^[0-9]+' datos.txt             # Líneas que empiezan con números
grep -E 'error|warning' app.log         # Buscar "error" O "warning"

# ─── Contexto ───
grep -A 3 'ERROR' app.log               # 3 líneas DESPUÉS del match
grep -B 2 'ERROR' app.log               # 2 líneas ANTES
grep -C 2 'ERROR' app.log               # 2 líneas antes Y después

# ═══════════════════════════════════════
# FIND — Localizar archivos y directorios
# ═══════════════════════════════════════

# ─── Por nombre ───
find / -name "archivo.txt"               # Buscar por nombre exacto
find . -name "*.py"                      # Todos los .py desde directorio actual
find . -iname "*.CSV"                    # -iname = ignorar mayúsculas

# ─── Por tipo ───
find . -type f                           # Solo archivos (f = file)
find . -type d                           # Solo directorios (d = directory)
find . -type d -name "*"                 # Todos los directorios

# ─── Por tamaño ───
find . -size +100M                       # Archivos mayores a 100 MB
find . -size -1k                         # Archivos menores a 1 KB
find . -type f -size +1M                 # Archivos mayores a 1 MB
find . -empty                            # Archivos vacíos

# ─── Por fecha ───
find . -mtime -7                         # Modificados en últimos 7 días
find . -mtime +30                        # Modificados hace más de 30 días

# ─── Con acciones ───
find . -name "*.tmp" -delete             # Encontrar y borrar
find . -name "*.log" -exec wc -l {} \;   # Contar líneas de cada .log
find . -type f -name "*.py" | xargs grep "import"  # Combinar con grep
```

**Expresiones regulares:** Patrones que buscan correspondencias en texto. Actúan como moldes para encontrar coincidencias exactas o aproximadas.

---
---

# SECCIÓN 4: FUNCIONAMIENTO DE LA TERMINAL

---

## Módulo 10 — Tipos de comandos en Linux y cómo identificarlos

**Clase:** 05:42 min

### Resumen Platzi

Un comando en Linux puede ser: un script en shell, un binario compilado (C++), utilidades del sistema o alias personalizados. Las herramientas type, which, whereis y whatis permiten identificar la naturaleza y ubicación de cada comando. El directorio /usr/bin aloja gran parte de los comandos estándares.

### Contenido detallado

**Tipos de comandos:**

| Tipo | Descripción | Ejemplo |
|------|------------|---------|
| Internos (built-in) | Integrados en el shell | `cd`, `echo`, `export`, `alias` |
| Externos (binarios) | Programas compilados | `ls`, `grep`, `python3` |
| Alias | Atajos personalizados | `ll` → `ls -la --color=auto` |
| Scripts | Archivos ejecutables en varios lenguajes | shell scripts, Python scripts |

```bash
# ─── Identificar tipos ───
type ls                    # ls is aliased to 'ls --color=auto'
type cd                    # cd is a shell builtin
type python3               # python3 is /usr/bin/python3

# ─── Ubicar comandos ───
which ls                   # /usr/bin/ls
which -a python            # Todas las ubicaciones
whereis ls                 # ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz

# ─── Info rápida ───
whatis grep                # grep - print lines that match patterns
help cd                    # Ayuda para built-ins
man ls                     # Manual completo
info grep                  # Documentación detallada
```

---

## Módulo 11 — Redirecciones de terminal en Linux

**Clase:** 11:41 min

### Resumen Platzi

Las redirecciones permiten transferir la salida estándar (stdout) de un comando hacia archivos o como entrada (stdin) de otro comando. Operadores clave: mayor que (>) para escribir, doble mayor (>>) para agregar, pipe (|) para encadenar comandos, 2> para capturar errores, y &> para capturar todo.

### Contenido detallado

**Flujos estándar (file descriptors):**

| FD | Nombre | Descripción | Default |
|----|--------|-------------|---------|
| 0 | stdin | Entrada estándar | Teclado |
| 1 | stdout | Salida estándar | Pantalla |
| 2 | stderr | Salida de errores | Pantalla |

```bash
# ─── SALIDA ───
echo "hola mundo" > archivo_hola.txt     # > = escribir (sobreescribe)
echo "hola personas" >> archivo_hola.txt # >> = agregar al final (append)
ls -la > listado.txt                     # Guardar salida en archivo

# ─── ERRORES ───
ls archivo_inexistente 2> errores.log    # 2> = redirigir stderr
ls archivo_inexistente 2>> errores.log   # 2>> = append de errores
sudo apt install vim &> instalacion.log  # &> = stdout + stderr juntos
comando > salida.log 2>&1               # Alternativa: todo al mismo archivo

# ─── ENTRADA ───
sort < datos.txt                         # < = usar archivo como entrada
wc -l < archivo.txt                      # Contar líneas desde archivo

# ─── PIPE | ───
echo "saludo colorido" | lolcat          # Salida como entrada del siguiente
cat datos.csv | head -5                  # Primeras 5 líneas
history | grep 'git'                     # Buscar en historial
cat log.txt | sort | uniq -c | sort -rn | head  # Pipeline complejo

# ─── DESCARTAR ───
comando > /dev/null                      # Descartar stdout
comando 2> /dev/null                     # Descartar stderr
comando > /dev/null 2>&1                 # Descartar todo

# ─── TEE: guardar Y mostrar ───
comando | tee archivo                    # Guardar en archivo y mostrar en pantalla
```

---

## Módulo 12 — Operadores de control para encadenar comandos

**Clase:** 07:42 min

### Resumen Platzi

Los operadores de control permiten ejecutar múltiples comandos en secuencia, paralelo o condicionalmente. El punto y coma (;) ejecuta secuencialmente sin importar resultados. El && ejecuta el siguiente solo si el anterior tuvo éxito. El || ejecuta el siguiente solo si el anterior falló. Se pueden combinar para manejo avanzado de flujos y logs.

### Contenido detallado

```bash
# ─── SECUENCIAL ; ───
echo primero; ls -la; echo tercero       # Ejecutar todos, sin importar errores

# ─── AND && ───
mkdir proyecto && cd proyecto            # Solo entra si se creó bien
apt update && apt upgrade -y             # Solo upgrade si update funciona
ls -la && echo "se mostró el listado"

# ─── OR || ───
cd proyecto || mkdir proyecto            # Si no existe, la crea
ls archivo_no_existente || touch error.log
grep 'error' log || echo "Sin errores"

# ─── COMBINACIONES ───
mkdir test && cd test || echo "Falló"
comando_uno && comando_dos || comando_tres
ls && echo éxito || echo fracaso

# ─── BACKGROUND & ───
sleep 1000 &                             # Ejecutar en segundo plano
```

**Código de salida ($?):**

```bash
ls archivo_existente.txt
echo $?                    # 0 = éxito

ls archivo_que_no_existe.txt
echo $?                    # 1 o 2 = error (no-zero = fallo)
```

---

## Módulo 13 — Configuración de alias permanentes

**Clase:** 08:31 min

### Resumen Platzi

Los alias son apodos asignados a comandos para reducir su extensión o complejidad. Los alias temporales funcionan solo en la sesión actual. Para hacerlos permanentes, se agregan al archivo de configuración del shell (.bashrc o .zshrc). Se usa `echo $SHELL` para identificar el shell, y `source ~/.bashrc` para recargar sin cerrar terminal.

### Contenido detallado

```bash
# ─── ALIAS TEMPORALES (solo esta sesión) ───
alias ll='ls -la'
alias cls='clear'
alias ..='cd ..'
alias ...='cd ../..'
alias gs='git status'
alias gp='git push'

# ─── VER Y ELIMINAR ───
alias                      # Ver todos los alias activos
unalias ll                 # Eliminar alias (solo esta sesión)

# ─── ALIAS PERMANENTES ───
# 1. Identificar tu shell:
echo $SHELL

# 2. Editar archivo de configuración:
nano ~/.bashrc             # Para bash
nano ~/.zshrc              # Para zsh

# 3. Agregar alias al final:
alias ll='ls -la --color=auto'
alias la='ls -A'
alias grep='grep --color=auto'
alias df='df -h'
alias free='free -h'
alias update='sudo apt update && sudo apt upgrade -y'

# 4. También con redirección:
echo "alias cls='clear'" >> ~/.bashrc

# 5. Recargar configuración:
source ~/.bashrc           # Para bash
source ~/.zshrc            # Para zsh
```

---
---

# SECCIÓN 5: SISTEMA OPERATIVO

---

## Módulo 14 — Gestión de permisos en archivos y directorios

**Clase:** 12:54 min

### Resumen Platzi

Los permisos en Linux indican las acciones que pueden realizar los usuarios sobre archivos o directorios: lectura (r), escritura (w) y ejecución (x). Se organizan en tres grupos: propietario, grupo y otros. Se asignan con chmod usando letras o notación numérica (binaria). El método numérico usa sumas: 4=lectura, 2=escritura, 1=ejecución. Se recomienda mantener permisos al mínimo necesario; 777 es peligroso.

### Contenido detallado

**Estructura de permisos:**

```
-rwxr-xr-x  1  usuario  devs  4096  abr 13  script.sh
 │├─┤├─┤├─┤
 │ │   │  └── Otros (o)
 │ │   └───── Grupo (g)
 │ └───────── Dueño (u)
 └─────────── Tipo: - = archivo, d = directorio, l = link
```

| Permiso | Letra | Valor | En archivos | En directorios |
|---------|-------|-------|-------------|----------------|
| Lectura | r | 4 | Ver contenido | Listar contenido |
| Escritura | w | 2 | Modificar | Crear/eliminar archivos dentro |
| Ejecución | x | 1 | Ejecutar como programa | Entrar al directorio |

**Notación numérica:**

```
rwx = 4+2+1 = 7    rw- = 4+2+0 = 6    r-x = 4+0+1 = 5
r-- = 4+0+0 = 4    --- = 0+0+0 = 0
```

```bash
# ─── chmod: notación numérica ───
chmod 755 script.sh        # rwxr-xr-x (dueño todo, grupo+otros leen+ejecutan)
chmod 644 archivo.txt      # rw-r--r-- (dueño lee+escribe, resto solo lee)
chmod 700 privado/         # rwx------ (solo el dueño)
chmod 600 .ssh/id_rsa      # rw------- (clave SSH)

# ─── chmod: notación simbólica ───
chmod u+x script.sh        # Agregar ejecución al dueño
chmod g+w archivo.txt      # Agregar escritura al grupo
chmod o-r archivo.txt      # Quitar lectura a otros
chmod a+r archivo.txt      # Agregar lectura a todos
chmod -R 755 directorio/   # -R = recursivo

# ─── chown: cambiar dueño ───
sudo chown usuario archivo.txt
sudo chown usuario:devs archivo.txt    # Dueño Y grupo
sudo chown -R usuario:devs proyecto/   # Recursivo

# ─── chgrp: cambiar grupo ───
sudo chgrp devs archivo.txt
```

---

## Módulo 15 — Variables de entorno

**Clase:** 08:27 min

### Resumen Platzi

Las variables de entorno almacenan información global utilizada por el sistema y aplicaciones. Se invocan con el símbolo $ seguido del nombre. Variables importantes: PWD (directorio actual), PATH (rutas de ejecutables), LANGUAGE (idioma). Se crean con asignación directa (temporales) o con export (globales). Para persistir, se agregan al archivo .bashrc.

### Contenido detallado

```bash
# ─── VARIABLES LOCALES (solo esta sesión) ───
MI_VARIABLE="hola mundo"
echo $MI_VARIABLE                        # hola mundo

# ─── VARIABLES DE ENTORNO (globales, procesos hijos) ───
export MI_VARIABLE="hola mundo"
export PATH="$PATH:/mi/ruta/bin"

# ─── VER VARIABLES ───
echo $HOME                  # /home/usuario
echo $USER                  # usuario
echo $SHELL                 # /bin/bash
echo $PATH                  # Directorios de ejecutables
echo $PWD                   # Directorio actual
echo $LANG                  # Idioma del sistema
echo $PS1                   # Formato del prompt
echo $$                     # PID del proceso actual
echo $?                     # Código de salida del último comando
env                         # Ver TODAS las variables
env | less                  # Navegar todas ordenadamente
printenv                    # Igual que env

# ─── HACER PERMANENTES ───
nano ~/.bashrc
# Agregar al final:
export EDITOR="nano"
export PATH="$PATH:$HOME/.local/bin"
# Guardar y recargar:
source ~/.bashrc

# ─── ELIMINAR ───
unset MI_VARIABLE
```

**Variables del sistema importantes:**

| Variable | Descripción |
|----------|-------------|
| `$HOME` | Directorio personal del usuario |
| `$PATH` | Lista de directorios donde buscar ejecutables |
| `$USER` | Nombre del usuario actual |
| `$SHELL` | Shell en uso |
| `$EDITOR` | Editor de texto por defecto |
| `$LANG` / `$LANGUAGE` | Configuración de idioma |
| `$PS1` | Formato del prompt |
| `$PWD` | Directorio de trabajo actual |
| `$$` | PID del proceso actual |
| `$?` | Código de salida del último comando |

---

## Módulo 16 — Gestión de paquetes con APT

**Clase:** 07:37 min

### Resumen Platzi

APT (Advanced Package Tool) gestiona la instalación, actualización y eliminación de software en distribuciones basadas en Debian/Ubuntu. Otros gestores: DNF/Yum (Red Hat/Fedora), Pacman (Arch Linux). La actualización implica dos pasos: actualizar la base de datos de paquetes (apt update) y luego actualizar los paquetes instalados (apt upgrade). Siempre usar sudo.

### Contenido detallado

```bash
# ─── ACTUALIZAR ───
sudo apt update                # Actualizar lista de paquetes disponibles
sudo apt upgrade -y            # Actualizar paquetes instalados
sudo apt full-upgrade          # Upgrade agresivo

# ─── INSTALAR ───
sudo apt install htop          # Instalar un paquete
sudo apt install git curl wget # Instalar varios
sudo apt install -y paquete    # -y = aceptar sin preguntar

# ─── INFORMACIÓN ───
apt search "editor"            # Buscar paquetes
apt show htop                  # Info detallada
apt list --installed           # Listar instalados
apt list --upgradeable         # Listar con actualizaciones

# ─── ELIMINAR ───
sudo apt remove paquete        # Eliminar (mantiene config)
sudo apt purge paquete         # Eliminar + configuración
sudo apt autoremove            # Eliminar dependencias huérfanas

# ─── EJEMPLO PRÁCTICO ───
sudo apt install neofetch      # Instalar
neofetch                       # Ejecutar (muestra info del sistema)
sudo apt remove neofetch       # Desinstalar
```

**Gestores por distribución:**

| Distro | Gestor | Ejemplo |
|--------|--------|---------|
| Debian/Ubuntu | APT | `apt install` |
| Red Hat/Fedora | DNF/Yum | `dnf install` |
| Arch Linux | Pacman | `pacman -S` |
| macOS | Homebrew | `brew install` |

---

## Módulo 17 — Homebrew en macOS

**Clase:** 07:22 min

### Resumen Platzi

Homebrew es "el manejador de paquetes perdido para macOS". Permite instalar software mediante la terminal. Instalación mediante script desde brew.sh. Comandos similares a APT: brew install, brew uninstall, brew update, brew upgrade, brew list, brew search. Precaución: no es gestor oficial, verificar fuentes de paquetes.

### Contenido detallado

```bash
# ─── INSTALACIÓN ───
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew --version                 # Verificar instalación

# ─── GESTIONAR PAQUETES ───
brew search nombre_paquete     # Buscar
brew info nombre_paquete       # Info detallada
brew install neofetch          # Instalar
brew uninstall neofetch        # Desinstalar
brew list                      # Listar instalados

# ─── ACTUALIZAR ───
brew update                    # Actualizar Homebrew
brew upgrade                   # Actualizar todos los paquetes

# ─── LIMPIAR ───
brew cleanup                   # Limpiar versiones antiguas
brew doctor                    # Diagnóstico de problemas

# ─── APPS GRÁFICAS (Cask) ───
brew install --cask visual-studio-code
brew install --cask firefox
```

---

## Módulo 18 — Procesos en foreground y background

**Clase:** 06:40 min

### Resumen Platzi

Los procesos en foreground bloquean la terminal hasta terminar. Los procesos en background se ejecutan "tras bambalinas" permitiendo continuar usando la terminal. Se envían a background con & al final del comando. Se controlan con jobs, fg, bg. Ctrl+C cancela, Ctrl+Z pausa. Cada proceso tiene un ID asignado.

### Contenido detallado

```bash
# ─── FOREGROUND (primer plano, bloquea terminal) ───
sleep 30                       # Bloquea 30 segundos

# ─── BACKGROUND (segundo plano) ───
sleep 30 &                     # & al final = background
# [1] 12345                    # [job_number] PID

sleep 1000 && echo "base de datos actualizado" &

# ─── CONTROLAR PROCESOS ───
Ctrl + C                       # Cancelar proceso actual
Ctrl + Z                       # Suspender (pausar) proceso actual
jobs                           # Ver procesos suspendidos/background
fg                             # Traer último proceso a foreground
fg %1                          # Traer job #1 a foreground
bg                             # Reanudar último en background
bg %2                          # Reanudar job #2 en background

# ─── EJEMPLO PRÁCTICO ───
python3 script_largo.py        # Ejecutar (foreground)
# Ctrl + Z                     # Suspender
bg                             # Reanudar en background
jobs                           # Verificar estado

# ─── INMUNE A HANGUPS ───
nohup comando &                # Sigue corriendo al cerrar terminal
```

---

## Módulo 19 — Administración de procesos con PS, Top y Kill

**Clase:** 13:02 min

### Resumen Platzi

PS (process snapshot) muestra una fotografía de los procesos activos con info de usuario, PID, CPU, memoria. Top permite visualización dinámica en tiempo real con estados (running, sleeping, stopped, zombie) y prioridad (NI/Nice value). Htop mejora Top con visualización gráfica y búsqueda. Kill finaliza procesos por PID, con señal -9 para forzar terminación.

### Contenido detallado

```bash
# ─── ps: snapshot de procesos ───
ps                             # Procesos del terminal actual
ps aux                         # TODOS los procesos del sistema
ps aux | grep python           # Filtrar procesos
ps -ef                         # Formato estándar completo
ps aux --sort=-%mem | head     # Top por memoria
ps aux --sort=-%cpu | head     # Top por CPU
ps aux | grep -i sleep         # Buscar proceso específico

# ─── top: monitor en tiempo real ───
top
# Dentro de top:
#   q = salir
#   P = ordenar por CPU
#   M = ordenar por memoria
#   k = matar proceso (pide PID)

# ─── htop: monitor visual mejorado ───
sudo apt install htop
htop
# F3 = búsqueda por nombre
# F5 = vista de árbol (procesos padre/hijo)

# ─── pgrep/pidof: buscar PID ───
pgrep nombre_proceso           # PID por nombre
pidof proceso                  # PID de un proceso

# ─── kill: terminar procesos ───
kill PID                       # Señal TERM (terminar limpiamente)
kill -9 PID                    # Señal KILL (forzar terminación)
kill -15 PID                   # Señal TERM explícita
kill -STOP PID                 # Pausar
kill -CONT PID                 # Reanudar
killall nombre_proceso         # Matar todos por nombre
pkill nombre_proceso           # Similar a killall
```

**Señales importantes:**

| Señal | Número | Descripción |
|-------|--------|-------------|
| SIGTERM | 15 | Terminar limpiamente (default) |
| SIGKILL | 9 | Matar inmediatamente (no se puede ignorar) |
| SIGSTOP | 19 | Pausar |
| SIGCONT | 18 | Continuar |

**Nice value (NI):** Valores negativos = mayor prioridad (más recursos). Valores positivos = menor prioridad.

---
---

# SECCIÓN 6: UTILIDADES DEL SISTEMA

---

## Módulo 20 — Empaquetado y compresión con TAR y GZIP

**Clase:** 07:39 min

### Resumen Platzi

Empaquetar (reunir archivos en uno) y comprimir (reducir tamaño) son procesos distintos. El empaquetador habitual es TAR. El compresor estándar es gzip. Se pueden combinar: tar -czvf crea un .tar.gz. Para extraer: tar -xzvf. También existe gunzip para descomprimir individualmente.

### Contenido detallado

```bash
# ═══════════════════════════
# TAR — Empaquetado
# ═══════════════════════════
tar -cvf textos.tar textos/            # c=crear, v=verbose, f=archivo
tar -cvf backup.tar *.py               # Empaquetar todos los .py
tar -xvf textos.tar                    # x=extraer
tar -xvf archivo.tar -C /destino/      # Extraer en directorio específico
tar -tvf archivo.tar                   # Ver contenido sin extraer

# ═══════════════════════════
# GZIP — Compresión
# ═══════════════════════════
gzip archivo.txt                       # Comprime → archivo.txt.gz (borra original)
gunzip archivo.txt.gz                  # Descomprime
gzip -k archivo.txt                    # -k = keep (mantener original)
gzip -d archivo.txt.gz                 # -d = decompress

# ═══════════════════════════
# TAR + GZIP (lo más común)
# ═══════════════════════════
tar -czvf backup.tar.gz carpeta/       # z=gzip. Crear .tar.gz
tar -xzvf backup.tar.gz                # Extraer .tar.gz
tar -xzvf backup.tar.gz -C /destino/   # Extraer en directorio
tar -tzvf backup.tar.gz                # Listar contenido

# ─── Con bzip2 (mejor compresión, más lento) ───
tar -cjvf backup.tar.bz2 carpeta/     # j=bzip2
tar -xjvf backup.tar.bz2

# ─── ZIP (compatibilidad Windows) ───
zip -r backup.zip carpeta/             # Crear zip
unzip backup.zip                       # Extraer
unzip -l backup.zip                    # Listar contenido
unzip backup.zip -d /destino/          # Extraer en directorio
```

---

## Módulo 21 — Editores de texto Vim y Nano

**Clase:** 10:20 min

### Resumen Platzi

Vim es potente con curva de aprendizaje: tiene modos (normal, insertar, comando). Comandos clave: i (insertar), ESC (modo normal), :w (guardar), :q (salir), :wq (guardar y salir), :q! (salir sin guardar), dd (borrar línea), gg (inicio). Nano es más sencillo: Ctrl+O (guardar), Ctrl+X (salir), Ctrl+K (cortar), Ctrl+U (pegar), Ctrl+W (buscar). Ambos optimizan tiempo y usan menos recursos que editores gráficos.

### Contenido detallado

**Nano (sencillo):**

```bash
nano archivo.txt
```

| Atajo | Acción |
|-------|--------|
| `Ctrl + O` | Guardar |
| `Ctrl + X` | Salir |
| `Ctrl + K` | Cortar línea |
| `Ctrl + U` | Pegar |
| `Ctrl + W` | Buscar |
| `Ctrl + \` | Buscar y reemplazar |
| `Ctrl + G` | Ayuda completa |
| `Alt + U` | Deshacer |

**Vim (potente):**

```bash
vim archivo.txt
```

| Modo | Cómo entrar | Para qué |
|------|-------------|----------|
| Normal | `ESC` | Navegar, copiar, borrar, comandos |
| Insertar | `i` | Escribir texto |
| Visual | `v` | Seleccionar texto |
| Comando | `:` | Guardar, salir, buscar |

```
# Modo Normal:
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

# Navegación (modo normal)
h j k l       Izquierda, abajo, arriba, derecha
gg            Inicio del archivo
G             Final del archivo
0             Inicio de la línea
$             Final de la línea

# Edición (modo normal)
dd            Borrar línea completa
yy            Copiar línea
p             Pegar
u             Deshacer
Ctrl + R      Rehacer
/patrón       Buscar
n             Siguiente resultado
```

---

## Módulo 22 — Tmux para múltiples terminales

**Clase:** 08:42 min

### Resumen Platzi

Tmux permite gestionar múltiples paneles y ventanas en una sola terminal. Usa un prefijo (Ctrl+b) seguido de comandos. División vertical (%), horizontal ("). Nuevas ventanas (c), cambiar (n/p/número), renombrar (,). Mantiene sesiones en segundo plano — si cierras terminal, puedes recuperar con tmux attach. tmux ls lista sesiones activas.

### Contenido detallado

```bash
# ─── Instalación ───
sudo apt install tmux          # Linux
brew install tmux              # macOS

# ─── Iniciar ───
tmux                           # Nueva sesión
tmux new -s mi_sesion          # Sesión con nombre
```

**Comandos (prefijo: Ctrl+b, luego soltar y presionar tecla):**

| Acción | Comando |
|--------|---------|
| **Sesiones** | |
| Nueva sesión | `tmux new -s nombre` |
| Listar sesiones | `tmux ls` |
| Adjuntarse | `tmux attach -t nombre` / `tmux attach` |
| Desconectarse | `Ctrl+b` → `d` |
| Matar sesión | `tmux kill-session -t nombre` |
| **Ventanas (tabs)** | |
| Nueva ventana | `Ctrl+b` → `c` |
| Siguiente | `Ctrl+b` → `n` |
| Anterior | `Ctrl+b` → `p` |
| Listar | `Ctrl+b` → `w` |
| Renombrar | `Ctrl+b` → `,` |
| Ir a ventana N | `Ctrl+b` → `número` |
| **Paneles (splits)** | |
| Dividir vertical | `Ctrl+b` → `%` |
| Dividir horizontal | `Ctrl+b` → `"` |
| Moverse entre paneles | `Ctrl+b` → flechas |
| Cerrar panel | `exit` o `Ctrl+d` |
| Zoom panel | `Ctrl+b` → `z` |

**Caso de uso:** Inicias proceso largo en tmux, te desconectas (d), cierras terminal. El proceso sigue corriendo. Vuelves después con `tmux attach`.

---

## Módulo 23 — Comandos de red

**Clase:** 12:02 min

### Resumen Platzi

La terminal permite interactuar con recursos de red e Internet. El comando ip a muestra interfaces y direcciones IP. ip r muestra la tabla de ruteo. ping verifica disponibilidad de recursos. curl es un mini cliente HTTP para hacer peticiones GET/POST y descargar contenido. wget descarga archivos. Herramientas avanzadas: nmap (escaneo de puertos) y traceroute (rastreo de rutas de paquetes).

### Contenido detallado

```bash
# ─── INFORMACIÓN DE RED ───
ip a                           # Interfaces y direcciones IP
ip addr show                   # Igual, formato moderno
ip r                           # Tabla de rutas
ip route show                  # Igual
ifconfig                       # Info de interfaces (deprecated pero funcional)
hostname -I                    # Tu IP local

# ─── CONECTIVIDAD ───
ping www.google.com            # Verificar conectividad (Ctrl+C para parar)
ping -c 4 www.google.com       # Solo 4 pings

# ─── HTTP / DESCARGAR ───
curl www.google.com            # Hacer request HTTP (muestra HTML)
curl -O url                    # Descargar manteniendo nombre original
curl www.google.com > index.html  # Descargar y guardar
curl -I https://ejemplo.com   # Solo headers

wget https://ejemplo.com/archivo.zip   # Descargar archivo
wget -c URL                    # -c = continuar descarga interrumpida

# ─── DNS Y DIAGNÓSTICO ───
nslookup google.com            # Resolver DNS
dig google.com                 # Info DNS detallada
traceroute google.com          # Rastrear ruta de paquetes

# ─── PUERTOS Y CONEXIONES ───
netstat -tuln                  # Puertos abiertos
ss -tuln                       # Alternativa moderna
nmap host                      # Escanear puertos

# ─── SSH ───
ssh usuario@host               # Conectar a servidor remoto
scp archivo usuario@host:/ruta # Copiar archivo por SSH
```

---
---

# SECCIÓN 7: BONUS — TRUCOS Y CONSEJOS

---

## Módulo 24 — Personalización con ZSH y temas avanzados

**Clase:** 10:51 min

### Resumen Platzi

ZSH es una alternativa potente a Bash con autocompletado más eficiente, personalización extensa y soporte para plugins avanzados. Oh My ZSH es un framework de scripts que mejora productividad con autocompletados inteligentes y colores. Powerlevel10k es un tema avanzado con visualización de ramas Git, hora, SO y más. Requiere instalar la fuente Meslo NerdFont.

### Contenido detallado

```bash
# ─── Instalar ZSH ───
sudo apt install zsh
chsh -s $(which zsh)           # Cambiar shell por defecto

# ─── Instalar Oh My Zsh ───
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# ─── Configuración (~/.zshrc) ───
nano ~/.zshrc

# Cambiar tema:
ZSH_THEME="agnoster"          # Opciones: robbyrussell, bira, fino, powerlevel10k

# Agregar plugins:
plugins=(
  git                          # Aliases de git
  zsh-autosuggestions          # Sugerencias basadas en historial
  zsh-syntax-highlighting      # Colores en comandos
  z                            # Navegación rápida por directorios frecuentes
  docker                       # Autocompletado de docker
)

source ~/.zshrc                # Recargar

# ─── Instalar plugins populares ───
git clone https://github.com/zsh-users/zsh-autosuggestions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# ─── Powerlevel10k (tema avanzado) ───
# 1. Instalar fuente Meslo NerdFont desde repositorio oficial
# 2. Clonar tema:
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# 3. En ~/.zshrc:
ZSH_THEME="powerlevel10k/powerlevel10k"

# 4. Aplicar y configurar:
source ~/.zshrc
p10k configure                 # Configuración interactiva
```

---

## Módulo 25 — Warp: terminal con inteligencia artificial

**Clase:** 08:06 min

### Resumen Platzi

Warp es una terminal que integra inteligencia artificial permitiendo describir comandos en lenguaje natural. Permite ejecutar tareas complejas con instrucciones de texto, ahorrar tiempo, y corregir errores rápidamente. Funcionalidades: crear programas por descripción, sugerir/corregir/explicar comandos, visualizar resultados antes de ejecutar, dividir paneles para múltiples tareas. Soporte para WSL/Ubuntu.

### Contenido detallado

**Características principales:**

- Terminal moderna con interfaz visual mejorada
- Autocompletado inteligente con IA
- Bloques de comandos (cada ejecución agrupada visualmente)
- Búsqueda de comandos con lenguaje natural
- Workflows: plantillas reutilizables de secuencias de comandos
- Corrección y explicación de errores asistida por IA
- División de paneles para multitasking

```bash
# ─── Instalación ───
# macOS:
brew install --cask warp

# Windows/Linux:
# Descargar desde https://www.warp.dev/
```

---

## Módulo 26 — Recursos complementarios

**Clase:** 02:19 min

### Resumen Platzi

Dominar la terminal requiere práctica constante. La clave es la repetición y disposición para seguir aprendiendo. Recursos recomendados: Linux Basic for Hackers (gratuito, código abierto), Linux Bible (extenso, de pago), curso de administración de servidores Linux en Platzi. La cheat sheet del curso sirve como apoyo en momentos de duda.

### Recursos adicionales

- **Linux Journey:** https://linuxjourney.com — Ejercicios interactivos
- **OverTheWire Bandit:** https://overthewire.org/wargames/bandit/ — Juego para aprender terminal
- **Explainshell:** https://explainshell.com — Explica comandos complejos visualmente
- **tldr pages:** `sudo apt install tldr` → `tldr tar` — Manuales simplificados
- **Linux Basic for Hackers:** Gratuito, profundiza en estructura interna de la terminal
- **Linux Bible:** De pago, extenso y claro sobre todo el SO

---
---

# CHEAT SHEET COMPLETO

---

## Navegación

```bash
pwd                            # Directorio actual
ls / ls -la / ls -lh / ls -lt  # Listar (detalles/ocultos/legible/fecha)
cd dir / cd .. / cd ~ / cd -   # Navegar (directorio/arriba/home/anterior)
cd /                           # Ir a la raíz
pushd dir / popd               # Pila de directorios
```

## Archivos y Directorios

```bash
touch archivo.txt              # Crear archivo
mkdir dir / mkdir -p a/b/c     # Crear directorio(s)
cp archivo destino             # Copiar archivo
cp -r dir/ destino/            # Copiar directorio
cp -p archivo destino          # Copiar preservando permisos
mv origen destino              # Mover/renombrar
rm archivo / rm -rf dir/       # Eliminar archivo/directorio
rmdir dir                      # Eliminar directorio vacío
```

## Búsqueda

```bash
find /ruta -name "*.txt"       # Buscar por nombre
find . -type f -size +100M     # Buscar por tamaño
find . -mtime -7               # Modificados en 7 días
locate archivo                 # Buscar en base de datos del sistema
which comando                  # Ubicación de comando
whereis comando                # Todas las ubicaciones
```

## Visualización de Archivos

```bash
cat archivo                    # Mostrar todo
less archivo                   # Navegar interactivamente
head -n 20 archivo             # Primeras 20 líneas
tail -n 50 archivo             # Últimas 50 líneas
tail -f archivo                # Seguir en tiempo real
wc -l archivo                  # Contar líneas
wc -w archivo                  # Contar palabras
sort archivo                   # Ordenar
sort -n archivo                # Ordenar numéricamente
uniq archivo                   # Eliminar duplicados consecutivos
nl archivo                     # Numerar líneas
```

## Búsqueda en Archivos (grep)

```bash
grep "patrón" archivo          # Buscar texto
grep -i "patrón" archivo       # Ignorar mayúsculas
grep -r "patrón" directorio    # Recursivo
grep -v "patrón" archivo       # Líneas que NO coinciden
grep -n "patrón" archivo       # Con números de línea
grep -c "patrón" archivo       # Contar coincidencias
grep -E "p1|p2" archivo        # Múltiples patrones
grep -w "palabra" archivo      # Palabra completa
```

## Manipulación de Texto

```bash
sed 's/viejo/nuevo/g' archivo  # Reemplazar texto
sed -i 's/viejo/nuevo/g' arch  # Reemplazar en archivo original
awk '{print $1}' archivo       # Imprimir primera columna
awk -F',' '{print $2}' archivo # Columna 2, separador coma
cut -d',' -f1,3 archivo        # Extraer columnas 1 y 3
tr 'a-z' 'A-Z' < archivo      # Minúsculas a mayúsculas
```

## Permisos y Propietarios

```bash
chmod 755 archivo              # rwxr-xr-x
chmod 644 archivo              # rw-r--r--
chmod +x archivo               # Hacer ejecutable
chmod -R 755 directorio        # Recursivo
chown usuario:grupo archivo    # Cambiar dueño y grupo
chgrp grupo archivo            # Cambiar grupo
sudo comando                   # Ejecutar como root
```

## Procesos

```bash
ps aux                         # Todos los procesos
ps aux | grep proceso          # Filtrar proceso
top / htop                     # Monitor en tiempo real
pgrep nombre                   # Buscar PID por nombre
kill PID                       # Terminar proceso
kill -9 PID                    # Forzar terminación
killall nombre                 # Matar todos por nombre
jobs                           # Listar trabajos background
bg %1 / fg %1                 # Background / Foreground
nohup comando &                # Ejecutar inmune a hangups
```

## Redirección e I/O

```bash
comando > archivo              # Escribir (sobreescribe)
comando >> archivo             # Agregar (append)
comando < archivo              # Usar como entrada
comando 2> archivo             # Redirigir errores
comando &> archivo             # Todo (stdout + stderr)
comando > /dev/null            # Descartar salida
comando1 | comando2            # Pipe
comando | tee archivo          # Guardar y mostrar
comando | xargs otro           # Pasar argumentos
```

## Operadores de Control

```bash
cmd1 ; cmd2                    # Secuencial (ambos)
cmd1 && cmd2                   # AND (cmd2 solo si cmd1 éxito)
cmd1 || cmd2                   # OR (cmd2 solo si cmd1 falla)
comando &                      # Background
```

## Compresión

```bash
tar -czvf arch.tar.gz dir/     # Crear .tar.gz
tar -xzvf arch.tar.gz          # Extraer .tar.gz
tar -tzvf arch.tar.gz          # Listar contenido
tar -cjvf arch.tar.bz2 dir/    # Crear .tar.bz2
gzip archivo / gunzip arch.gz  # Comprimir/descomprimir
zip -r arch.zip dir/           # Crear ZIP
unzip arch.zip                 # Extraer ZIP
```

## Variables de Entorno

```bash
export VAR=valor               # Crear variable global
echo $VAR                      # Mostrar valor
env                            # Listar todas
unset VAR                      # Eliminar
export PATH=$PATH:/nueva/ruta  # Agregar al PATH
```

## Alias

```bash
alias ll='ls -la'              # Crear alias temporal
alias                          # Ver todos
unalias ll                     # Eliminar alias
# Permanentes: agregar a ~/.bashrc o ~/.zshrc
```

## Red

```bash
ip a / ifconfig                # Info de interfaces
ip r                           # Tabla de rutas
ping -c 4 host                 # Verificar conectividad
curl url                       # Request HTTP
curl -O url                    # Descargar
wget url                       # Descargar archivo
wget -c url                    # Continuar descarga
nslookup dominio               # Resolver DNS
dig dominio                    # DNS detallado
traceroute host                # Rastrear ruta
netstat -tuln / ss -tuln       # Puertos abiertos
ssh usuario@host               # Conectar remoto
scp archivo user@host:/ruta    # Copiar por SSH
```

## Sistema

```bash
uname -a                       # Info completa del sistema
uname -r                       # Versión del kernel
free -h                        # Memoria RAM
df -h                          # Espacio en disco
du -sh directorio              # Tamaño de carpeta
du -h --max-depth=1            # Tamaño subdirectorios
uptime                         # Tiempo de actividad
who / w                        # Usuarios conectados
id                             # Info del usuario actual
neofetch                       # Info visual del sistema
lscpu                          # Info del procesador
```

## Gestión de Paquetes

```bash
# Debian/Ubuntu (APT):
sudo apt update && sudo apt upgrade -y
sudo apt install paquete
sudo apt remove/purge paquete
sudo apt autoremove

# macOS (Homebrew):
brew install/uninstall paquete
brew update && brew upgrade
brew list / brew search nombre
brew cleanup
```

## Editores de Terminal

```bash
# Nano:
nano archivo                   # Ctrl+O guardar, Ctrl+X salir
# Vim:
vim archivo                    # i=insertar, ESC=normal, :wq=guardar+salir
```

## Tmux

```bash
tmux / tmux new -s nombre      # Iniciar sesión
tmux ls                        # Listar sesiones
tmux attach -t nombre          # Reconectar
# Prefijo Ctrl+b, luego:
# d=desconectar, c=nueva ventana, %=split vertical, "=split horizontal
# n/p=siguiente/anterior ventana, flechas=mover entre paneles
```

## Atajos de Teclado

```bash
Tab            # Autocompletar
Tab+Tab        # Mostrar opciones
↑/↓            # Historial de comandos
Ctrl+R         # Buscar en historial
Ctrl+C         # Interrumpir proceso
Ctrl+Z         # Suspender proceso
Ctrl+D         # EOF / Cerrar sesión
Ctrl+L         # Limpiar pantalla
Ctrl+A / E     # Inicio / Final de línea
Ctrl+U / K     # Borrar izquierda / derecha
Ctrl+W         # Borrar palabra anterior
Alt+B / F      # Mover palabra atrás / adelante
!!             # Repetir último comando
!$             # Último argumento del comando anterior
```

## Wildcards

```bash
*              # Cualquier cadena: ls *.py
?              # Un carácter: ls archivo?.txt
[abc]          # Uno del conjunto: ls archivo[123].txt
[!abc]         # Uno que NO esté: ls archivo[!0-9].txt
{a,b}          # Expansión: mkdir {src,tests,docs}
{1..10}        # Rango: touch file{1..10}.txt
```

## Archivos de Configuración Importantes

```bash
/etc/passwd       # Información de usuarios
/etc/group        # Información de grupos
/etc/fstab        # Sistemas de archivos automontados
/etc/crontab      # Tareas programadas del sistema
~/.bashrc         # Configuración personal de bash
~/.zshrc          # Configuración personal de zsh
~/.ssh/config     # Configuración SSH personal
```

## Combinaciones Poderosas

```bash
find . -name "*.log" -exec rm {} \;                    # Encontrar y eliminar
ps aux | grep proc | awk '{print $2}' | xargs kill     # Matar procesos por nombre
du -sh * | sort -hr                                     # Directorios por tamaño
tail -f /var/log/syslog | grep ERROR                   # Monitorear errores
cat log.txt | sort | uniq -c | sort -rn | head         # Top 10 líneas frecuentes
history | grep 'git'                                    # Buscar en historial
```

---

*Documento generado como cerebro del curso para uso con Claude Code.*
*Fuentes: Platzi (Enrique Devars), Linux Terminal Cheat Sheet PDF, contenido expandido.*

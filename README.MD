# MWC 2022 HACKATHON [NUWE]
Challenge was to create a CLI with different commands to get information about MWC.

## Stack
- NodeJs
- MongoDB

I have chosen these two technologies as I have not worked with them before.

### Packages
- **Mongoose**: _for MongoDB_
- **Commander**: _for commands_
- **Inquirer**: _for commands interface_


## Getting Started

### Prerequisites

- [NodeJs](https://nodejs.dev/)
- [Docker](https://docs.docker.com/desktop)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

Clone this repository
```
git clone https://github.com/ocania/MWC-2022-Hackathon
```

Execute script.sh. This script install dependencies and run MongoDB container.
```
./script.sh
```

Link package (recommended). This is for run CLI only with the command 'mwc'. Probably you need to run with privileges.

![Screenshot](https://gyazo.com/829acb771bb3d3f60b8469672c684cbc.png)

### Stop container
Stop MongoDB container with:
```
docker-compose down
```

# Usage
Run CLI. As we can see, all the commands that we can use are displayed.
If you have not linked the package run 'node ./app/bin/mwc.js'

![Screenshot](https://gyazo.com/a7991a02ade1e670445b96659619c258.png)

### Show MWC days
![Screenshot](https://gyazo.com/92457b27482d7a142cbb1adb7e3d9d7e.png)

### Add developer to event
![Screenshot](https://gyazo.com/e16a3120ea2154f63c10f028c0930031.png)

### Show list of attending developers
![Screenshot](https://gyazo.com/14dbe0f636240f2e83ff79212275e781.png)
![Screenshot](https://gyazo.com/4c685f4bc7a9f157be1cd3bb089e63ab.png)
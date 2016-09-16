## Пример блокирующего и неблокирующего аддонов для node.js
Тестировалось на node.js v6.3.1. Предполагается, что `node-gyp` установлен.
```bash
git clone git@github.com:masim05/node-addons-demo.git
cd ./node-addons-demo
project_path=`pwd`
```
### Блокирующий аддон
```bash
cd ./sync
node-gyp configure build
node addon.js
```
Поток исполнения блокируется в аддоне вызовом `sleep(4)` и мы не видим распечатки
счетчика.
### Неблокирующий аддон
```bash
cd ./async
node-gyp configure build
node addon.js
```
Поток исполнения не блокируется в аддоне вызовом `sleep(4)` и мы видим распечатки
счетчика.
[About more Tutorial](https://medium.com/@athivvat/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-react-application-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-create-react-app-react-router-express-js-118356fa72ad) <br>
Clone template at : [https://github.com/winaibuttasart/ReactTemplate](https://github.com/winaibuttasart/ReactTemplate) <br>
UI Template launch by [https://material-ui.com](https://material-ui.com)
# Start project
```sh
$ yarn start | $ npm start
```
# Build project
```sh
yarn run build
```
# Start the express.js app
```sh
node server
```

# Extention แนะนำสำหรับชาว VS Code
1. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
4. [Auto Import - ES6,TS,JSX,TSX](https://marketplace.visualstudio.com/items?itemName=NuclleaR.vscode-extension-auto-import)
5. [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
6. [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
7. [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

# อ่านเพิ่มเติม
* ตัวอย่างการ import component ลูก มาแปะที่พ่อแม่ (parent) ดูได้จาก testComponent.js
* ตัวอย่างการส่งค่าจากพ่อแม่ไปยังลูก ดูได้จากการส่งค่าจาก testComponent.js ไปยัง header.js (เราจะส่งผ่าน props)
* การแก้ไขค่าของ state เราจะกระทำผ่าน this.setState เพราะถ้าไม่ทำผ่านตัวนี้ ถึงแม้ข้อมูลจะเปลี่ยนจริง แต่หน้าเว็บจะไม่รู้ว่าข้อมูลเปลี่ยน แล้วก็จะไม่ render หน้าเว็บใหม่ ทำให้ข้อมูลบนหน้าเว็บไม่เปลี่ยนแปลงให้เห็น (ถึงแม้ค่าข้อมูลเปลี่ยนไปแล้วก็เถอะนะ :( ) [component ใดๆ จะส่งค่าหรือเปลีย่นแปลงค่าในตัวเอง จะทำผ่าน state นะ รู้ป่าว]
* ตัวอย่างการส่งค่าจากลูก หรือข้อมูล(การกระทำ)ต่างๆของผู้ใช้ไปยังพ่อแม่ ดูได้จากการส่งค่าจาก footer.js ไปยัง testComponent.js (เราจะส่งผ่าน constructor)
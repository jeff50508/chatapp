# chatapp  

__使用套件如下__  
const express = require('express');  
const mongoose = require('mongoose');  
const cookieParser = require('cookie-parser');  
const dotenv = require('dotenv');  
const jwt = require('jsonwebtoken');  
const cors = require('cors');  
const bcrypt = require('bcryptjs');  
const ws = require('ws');  
const fs = require('fs');  
  
  __使用tailwind切版，axios、cors、express進行前、後端資訊傳遞，並對使用者的資料使用bcrypt加密、jwt簽名、cookie-parser解析
  使用者cookies，且加入環境變數上傳mongodb。由於需要能即時聊天的功能，前後端需大量的交換資訊，這裡使用WebSocket(ws)來進行資訊的交換。__
  
  # 登入、註冊系統 
  ![login](https://github.com/jeff50508/chatapp/assets/111333990/73accd8e-cb1b-42da-ae8b-07d3c9b068e0)
  ![register](https://github.com/jeff50508/chatapp/assets/111333990/13f37818-1029-468a-b4f8-390f1bfcabcb)
  
  
  # 登入後頁面，包含登出功能
  ![afterlogin](https://github.com/jeff50508/chatapp/assets/111333990/b644ae68-84e0-4751-a44d-1a5b4d4dbc4d)
  
  
  # 顯示線上會員及離線會員、即時傳遞訊息及檔案
  ![螢幕擷取畫面 2023-05-12 144658](https://github.com/jeff50508/chatapp/assets/111333990/34197920-9adf-4195-b16f-69985ac5a9f3)

  
  

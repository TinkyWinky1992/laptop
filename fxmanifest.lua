fx_version "cerulean"
lua54 'yes'
game 'gta5'
author 'VIT0'
version '1.0.0'

ui_page 'laptop/dist/index.html'

client_scripts {
  'client/client.lua',
}

server_script {
  'server/server.lua',

}


files {
  'laptop/dist/index.html',
  'laptop/dist/**/*',
}
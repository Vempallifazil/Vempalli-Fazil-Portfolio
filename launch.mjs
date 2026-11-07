import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
const root=fileURLToPath(new URL('./dist/',import.meta.url));
const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.woff2':'font/woff2','.woff':'font/woff','.pdf':'application/pdf'};
const server=createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const file=resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(resolve(root)+sep)){res.writeHead(403).end();return}
  const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'}).end(data);
 }catch{res.writeHead(404).end('File unavailable')}
});
server.listen(0,'127.0.0.1',()=>{
 const url='http://127.0.0.1:'+server.address().port;
 console.log('Portfolio running at '+url+'  (Ctrl+C to stop)');
 const command=process.platform==='win32'?'rundll32':process.platform==='darwin'?'open':'xdg-open';
 spawn(command,process.platform==='win32'?['url.dll,FileProtocolHandler',url]:[url],{stdio:'ignore'}).on('error',()=>console.log('Open the address above in your browser.'));
});

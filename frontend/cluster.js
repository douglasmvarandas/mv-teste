var cluster = require('cluster');
var os = require('os');

var cpus = os.cpus();

console.log('Executando thread');
console.log('Quantidade de threads: ' + cpus.length);

if( cluster.isMaster ){
    console.log('Executando na thread master');
    cpus.forEach(function(){
        cluster.fork();
    });

    cluster.on('listening', function(worker){
        console.log('Cluster conectado %s' , worker.process.pid);
    });

    cluster.on('exit', worker => {
        console.log('Cluster desconectado %s' , worker.process.pid);
        cluster.fork();
    });

}else{
    console.log('Executando na thread slave');
    require('./app.js');
}
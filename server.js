const http = require('http') // módulo nativo http
const colors = require('colors') // biblioteca para cores no terminal
const fs = require('fs') // File System
const path = require('path') // manipulação de caminhos

// ===============================
// Dados simulando um banco de dados
// ===============================

// Planos da academia
const planos = [
    { id: 1, nome: 'Plano Básico', preco: 99.90, acesso: 'Musculação' },
    { id: 2, nome: 'Plano Intermediário', preco: 149.90, acesso: 'Musculação + Aulas' },
    { id: 3, nome: 'Plano Premium', preco: 199.90, acesso: 'Completo + Personal' }
]

// Exercícios
const exercicios = [
    { id: 1, nome: 'Supino Reto', grupoMuscular: 'Peito' },
    { id: 2, nome: 'Agachamento Livre', grupoMuscular: 'Pernas' },
    { id: 3, nome: 'Puxada Frontal', grupoMuscular: 'Costas' },
    { id: 4, nome: 'Rosca Direta', grupoMuscular: 'Bíceps' },
    { id: 5, nome: 'Tríceps Pulley', grupoMuscular: 'Tríceps' }
]

// ===============================
// Criação do servidor
// ===============================
const server = http.createServer((req, res) => {

    // log da requisição
    console.log(`Requisição recebida: ${req.url}`.cyan);

    // ===============================
    // ROTA HOME
    // ===============================
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'index.html');

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Erro interno do servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(content);
            }
        });
    }

    // ===============================
    // ROTA API - PLANOS
    // ===============================
    else if (req.url === '/api/planos') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(planos));
    }

    // ===============================
    // ROTA API - EXERCÍCIOS
    // ===============================
    else if (req.url === '/api/exercicios') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(exercicios));
    }

    // ===============================
    // ROTA 404
    // ===============================
    else {
        const filePath = path.join(__dirname, 'public', '404.html');

        fs.readFile(filePath, (err, content) => {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content);
        });
    }
})

// ===============================
// Porta e inicialização
// ===============================
const PORT = 3000

server.listen(PORT, () => {
    console.log(`🏋️ Servidor rodando em http://localhost:${PORT}`.green.bold);
});

//Tipos de conteudo basicos
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'

    };


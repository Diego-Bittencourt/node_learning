

const firstStop = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello, from Node.js</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<h3>Insert User</h3>');
        res.write('<input type="text" name="newuser" />');
        res.write('<button type="submit" value="Submit">Submit</button>')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<body>')
        res.write('<ul>');
        res.write('<li>Fulano</li>');
        res.write('<li>Sicrano</li>');
        res.write('<li>Beltrano</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const user = [];

        req.on('data', (chunk) => {
            user.push(chunk);
        }) 

        return req.on('end', () => {
            const parsedData = Buffer.concat(user).toString();

            const field = parsedData.split('=')[1];
            console.log(field);
            res.write('<html>');
        res.write('<body>');
        res.write(`<h1>${field}</h1>`);
        res.write('<formn action="/crete-user" method="POST">');
        res.write('<h3>Insert User</h3>');
        res.write('<input type="text" name="newuser" />');
        res.write('<button type="submit" value="Submit">Submit</button>')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        })
    }
}

module.exports = firstStop;
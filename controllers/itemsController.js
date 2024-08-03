const db = require('../db/pool');

async function getCategories(req, res) {
    try {
        let categories = await db.query(`
            SELECT DISTINCT category
            FROM items;
        `);
        res.render("index", { title: 'index', categories: categories.rows });
    } catch(err) {
        console.error('Error fetching categories:', err);
        res.status(500).send('Server error');
    }
} 
async function getItems(req, res) {
    try {
        const category = req.params.category
        console.log(category);
        let items = await db.query(`
            SELECT name
            FROM items  
            WHERE category = $1
        `, [category]);
        res.render("items", { title: 'items', items: items.rows});
    } catch(err) {
        console.error('Error fetching items:', err);
        res.status(500).send('Server error');
    }
}
module.exports = {
    getCategories,
    getItems
} 
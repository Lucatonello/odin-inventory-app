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
module.exports = getCategories;
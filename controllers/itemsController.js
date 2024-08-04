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
async function addCategoryGet(req, res) {
    res.render("add-category", { title: 'Add category'})
}
async function addCategoryPost(req, res) {
    try {
        const categoryName = req.body.categoryName || 'undefined';
        const addCategoryQuery = await db.query(`
            INSERT INTO
            items (name, category)
            VALUES ($1, $2)
        `, [req.body.addItemsToCategory, categoryName]); 

        res.redirect('/');
    } catch (err) {
        console.log('Error adding new category to the database', err);
        res.status(500).send('Server error');
    }
}

module.exports = {
    getCategories,
    getItems,
    addCategoryGet,
    addCategoryPost
} 
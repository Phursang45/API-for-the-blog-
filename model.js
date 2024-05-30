class Blog {
    id;
    title;
    Description;
    category;

    constructor(id, title, description, category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
    }
}

module.exports = Blog;

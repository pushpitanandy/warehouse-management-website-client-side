import React from 'react';

const Blogs = () => {
    return (
        <div className='container-fluid mt-5'>
            <h1 className='pt-3 text-center'>Blogs</h1>
            <div className='m-3 p-5 border border-3 rounded-3 border-success'>
                <h3>Difference between JavaScript and Nodejs</h3>
                <p>JavaScript is a scripting langauge through which programmers can write scripts to create dynamic websites. It is used in the client-side developments and can only run in the browsers. <br />Node JS is the runtime environment of JavaScript through which developers can run JavaScripts outside the browsers.It is mostly used in the server-side developments. </p>
            </div>
            <div className='m-3 p-5 border border-3 rounded-3 border-primary'>
                <h3>When should we use nodejs? </h3>
                <p>As we know that Node JS is a JavaScript runtime platform, it is best used for such JavaScript applications where we need a persistent connection between browser and the server. Any real-time applications like online games, collaboration tools, or chat rooms might use it. Anything where what one user does with the application needs to be seen by other users immediately, without a page refresh, Node JS is preferable.</p>
                <h3>When should we use mongodb?</h3>
                <p>MongoDB is a cloud database which is used for any large-scale internet application. It is easy for developers to store structured or unstructured data as it uses a JSON-like format to store documents. It is also easy to manage and retrieve the data from the database.</p>
            </div>
            <div className='m-3 p-5 border border-3 rounded-3 border-success'>
                <h3>Difference between SQL and NoSQL database</h3>
                <p>SQL is relational database management system. This have fixed or predefined format and are not suitable for hierarchical data storage system. This type of database is best for complex queries.<br />On the other hand, NoSQL is non-relational database system. It has very flexible format and are best for any hierarchical data storage system. But this type of databases are not good for complex queries. </p>
            </div>
        </div>
    );
};

export default Blogs;
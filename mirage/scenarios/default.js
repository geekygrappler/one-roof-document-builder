export default function(server) {

    /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
    */

    // server.createList('post', 10);
    let documents = server.createList('document', 5);
    //server.createList('item', 20);
    for (let document of documents) {
        server.createList('lineItem', 50, {
            document
        });
    }
}

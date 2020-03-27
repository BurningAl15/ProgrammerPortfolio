const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const elementTemplate = path.resolve("./src/components/template.js")

  const result = await graphql(`
  {
    allEducationJson 
    {
        edges 
        {
            node 
            {
                slug
               
            }
        }
    }
  }
  `);

 
    result.data.allEducationJson.edges.forEach(element => {
        // const { node } = element
        const node=element.node
        actions.createPage({
            path: node.slug,
            component: path.resolve("./src/template/template.js"),
            context: {
                slug: node.slug,
            }
        });
    })
}

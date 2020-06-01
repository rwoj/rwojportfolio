const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicCasestudy {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  const caseTemplate = path.resolve("src/templates/case.jsx");

  pages.data.allPrismicCasestudy.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.uid}`,
      component: caseTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};

// const _ = require("lodash");

// // graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
// const wrapper = (promise) =>
//   promise.then((result) => {
//     if (result.errors) {
//       throw result.errors;
//     }
//     return result;
//   });

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const postTemplate = require.resolve("./src/templates/post.jsx");
//   const categoryTemplate = require.resolve("./src/templates/category.jsx");

//   const result = await wrapper(
//     graphql(`
//       {
//         allPrismicPost {
//           edges {
//             node {
//               id
//               uid
//               data {
//                 categories {
//                   category {
//                     document {
//                       data {
//                         name
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `)
//   );

//   const categorySet = new Set();
//   const postsList = result.data.allPrismicPost.edges;

//   // Double check that the post has a category assigned
//   postsList.forEach((edge) => {
//     if (edge.node.data.categories[0].category) {
//       edge.node.data.categories.forEach((cat) => {
//         categorySet.add(cat.category.document[0].data.name);
//       });
//     }

//     // The uid you assigned in Prismic is the slug!
//     createPage({
//       path: `/${edge.node.uid}`,
//       component: postTemplate,
//       context: {
//         // Pass the unique ID (uid) through context so the template can filter by it
//         uid: edge.node.uid,
//       },
//     });
//   });

//   const categoryList = Array.from(categorySet);

//   categoryList.forEach((category) => {
//     createPage({
//       path: `/categories/${_.kebabCase(category)}`,
//       component: categoryTemplate,
//       context: {
//         category,
//       },
//     });
//   });
// };

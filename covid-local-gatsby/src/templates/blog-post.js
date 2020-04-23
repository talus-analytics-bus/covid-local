import React from "react"
import { Helmet } from "react-helmet"
import { Link } from 'gatsby';
// import '../css/blog-post.css'; // make it pretty!

import Layout from '../components/Layout/Layout';

import styles from '../styles/blog-post.module.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <article className={styles.main}>
        <Helmet 
          title={`Notes From The Field - ${post.frontmatter.title}`}
          meta={[
            {name: 'description', content: `COVID Local blog: keeping local leaders up to date during the COVID-19 pandemic.`},
          ]}
        />
        <Link to="/blog">&lt; back to all posts</Link>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.date}</h2>
        </header>

        <h3>{post.frontmatter.author}</h3>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`


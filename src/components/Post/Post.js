import React from 'react'
import { Link } from 'gatsby'
import { Layout, Tag, Divider } from 'antd'
import Comments from './Comments'
import Content from './Content'
import Tags from './Tags'
import getCategoryColor from '../../utils/get-category-color'

const AntContent = Layout.Content

const Post = ({ post, allCategories }) => {
  const { html } = post
  const { tagSlugs, slug, categorySlug } = post.fields
  const { tags, title, date, category } = post.frontmatter

  const categoryColor = getCategoryColor({ allCategories, category })

  return (
    <AntContent className="p-10">
      <Link className="" to="/">
        ← All Articles
      </Link>

      <div className="">
        <Content body={html} title={title} date={date} />
      </div>

      <div className="">
        <Link to={categorySlug} className="">
          <Tag
            className={`bg-${categoryColor} text-white border-transparent cursor-pointer`}
          >
            {category}
          </Tag>
        </Link>
        <Divider type="vertical" />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Divider type="vertical" />
      </div>

      <div className="mt-10">
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </AntContent>
  )
}

export default Post

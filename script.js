let blogs = [];

function saveBlog() 
{
  const titleInput = document.getElementById('blogTitle');
  const contentInput = document.getElementById('blogContent');

  const title = titleInput.value;
  const content = contentInput.value;

  if (title && content) {
    const blog = { title, content };

    const existingBlogIndex = blogs.findIndex(b => b.title === title);
    if (existingBlogIndex !== -1) {
      blogs[existingBlogIndex] = blog;
    } else {
      blogs.push(blog);
    }

    titleInput.value = '';
    contentInput.value = '';

    renderBlogPreviews();
    hideEditor();
  }
}

function renderBlogPreviews() 
{
  const blogList = document.getElementById('blogList');
  blogList.innerHTML = '';

  blogs.forEach((blog, index) => {
    const blogPreview = document.createElement('div');
    blogPreview.classList.add('blog-preview');

    const title = document.createElement('h3');
    title.textContent = blog.title;

    const previewContent = document.createElement('p');
    const content = blog.content.length > 50 ? blog.content.substring(0, 50) + '...' : blog.content;
    previewContent.textContent = content;

    const viewButton = document.createElement('button');
    viewButton.textContent = 'View';
    viewButton.addEventListener('click', () => showBlog(index));

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editBlog(index));

    blogPreview.appendChild(title);
    blogPreview.appendChild(previewContent);
    blogPreview.appendChild(viewButton);
    blogPreview.appendChild(editButton);

    blogList.appendChild(blogPreview);
  });
}

function showBlog(index) 
{
  const blog = blogs[index];
  const blogList = document.getElementById('blogList');

  blogList.innerHTML = '';

  const backButton = document.createElement('button');
  backButton.textContent = 'Back';
  backButton.addEventListener('click', renderBlogPreviews);

  const title = document.createElement('h2');
  title.textContent = blog.title;

  const content = document.createElement('p');
  content.textContent = blog.content;

  blogList.appendChild(backButton);
  blogList.appendChild(title);
  blogList.appendChild(content);
}

function editBlog(index) 
{
  const blog = blogs[index];
  const titleInput = document.getElementById('blogTitle');
  const contentInput = document.getElementById('blogContent');
  const saveButton = document.getElementById('saveButton');

  titleInput.value = blog.title;
  contentInput.value = blog.content;
  saveButton.textContent = 'Update';

  showEditor();
}

function showEditor() 
{
  const editor = document.getElementById('editor');
  const addButton = document.getElementById('addButton');

  editor.style.display = 'block';
  addButton.style.display = 'none';
}

function hideEditor() 
{
  const editor = document.getElementById('editor');
  const addButton = document.getElementById('addButton');
  const titleInput = document.getElementById('blogTitle');
  const contentInput = document.getElementById('blogContent');
  const saveButton = document.getElementById('saveButton');

  editor.style.display = 'none';
  addButton.style.display = 'block';
  titleInput.value = '';
  contentInput.value = '';
  saveButton.textContent = 'Save';
}

renderBlogPreviews();

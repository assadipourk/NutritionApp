async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

async function makePostHandler(event) {
  event.preventDefault();

  const workout = document.querySelector('input[name="workout"]').value.trim();
  const mealone = document.querySelector('input[name="mealone"]').value.trim();
  const mealtwo = document.querySelector('input[name="mealtwo"]').value.trim();
  const mealthree = document.querySelector('input[name="mealthree"]').value.trim();
  const dessert = document.querySelector('input[name="dessert"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const dailylog = document.querySelector('textarea[name="dailylog"]').value.trim();

  const response = await fetch(`/api/posts/`, {
    method: 'POST',
    body: JSON.stringify({
      workout, 
      mealone, 
      mealtwo, 
      mealthree, 
      dessert, 
      email, 
      dailylog,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('make-post-form').addEventListener('submit', makePostHandler);

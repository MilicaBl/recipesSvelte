<script>
  export let first_name = "";
  export let last_name = "";
  export let email = "";
  $: console.log("Firstname", first_name);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Formsubmit", event.target.email.value);

    let newUser = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,
    };

    fetch("http://localhost:3000/users/", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
</script>

<form on:submit={onSubmit}>
  <input type="text" id="first_name" bind:value={first_name} />
  <input type="text" id="last_name" bind:value={last_name} />
  <input type="text" id="email" bind:value={email} />
  <button>Spara</button>
</form>

<style>
</style>

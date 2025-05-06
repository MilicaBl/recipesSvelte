<script>
  export let user = {};
</script>

<div>
  {user.first_name}
  {user.last_name}<br />
  {user.email}
</div>

<style>
  div {
    margin: 3px;
    padding: 3px;
    max-width: 400px;
    border: 1px solid gold;
  }
</style>

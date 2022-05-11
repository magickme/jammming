<script>
    import TrackList from './TrackList.svelte';
</script>

<div class="SearchResults">
    <h2>Results</h2>
    <TrackList />
</div>

<style>
    .SearchResults {
  width: 50%;
  height: 950px;
  overflow-y: scroll;
  padding: .88rem;
  background-color: rgba(1, 12, 63, 0.7);
  box-shadow: 0 4px 2px 2px #000000;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

@media only screen and (max-width: 1020px) {
  .SearchResults {
    width: 90%;
    margin-bottom: 2rem;
  }
}
</style>

<div class="Track">
    <div class="Track-information">
      <h3><!-- track name will go here --></h3>
      <p><!-- track artist will go here--> | <!-- track album will go here --></p>
    </div>
    <button class="Track-action"><!-- + or - will go here --></button>
</div>

<style>
.Track {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(256, 256, 256, 0.8);
}

.Track-action {
  cursor: pointer;
  padding: .5rem;
  font-size: 1.05rem;
  transition: color .25s;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
}

.Track-action:hover {
  color: rgba(265, 265, 265, .5);
}

.Track-information {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 72px;
}

.Track-information h3 {
  margin-bottom: .22rem;
}

.Track-information p {
  font-size: .83rem;
  font-weight: 300;
  color: rgba(256, 256, 256, 0.8);
}
</style>
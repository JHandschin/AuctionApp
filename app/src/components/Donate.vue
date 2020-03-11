
<!-- <!doctype html> -->
<!-- <html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donate</title>
    <link rel="stylesheet" href="assets/app.css">
  </head>
<body> -->
<template>
<div class="grid-container">

  <form data-abide novalidate>
  <div class="grid-x grid-margin-x">
    <div class="cell">
      <div data-abide-error class="alert callout" style="display: none;">
        <p><i class="fi-alert"></i> There are some errors in your form.</p>
      </div>
    </div>
  </div>
  <div class="grid-x grid-margin-x">
    <div class="cell small-12">
      <label>Name
        <input type="text" placeholder="Bike" aria-describedby="exampleHelpTextNumber">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
    <div class="cell small-12">
      <label>Phone Number
        <input type="text" placeholder="(435)590-1234" aria-describedby="exampleHelpTextNumber" required pattern="number">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
    <div class="cell small-12">
      <label>Email
        <input type="text" placeholder="john.doe@gmail.com" aria-describedby="exampleHelpTextNumber">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
    <div class="cell small-12">
      <label>Item Name
        <input type="text" placeholder="Bike" aria-describedby="exampleHelpTextNumber">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
    <div class="cell small-12">
      <label>Item Price
        <input type="text" placeholder="$25" aria-describedby="exampleHelpTextNumber">
        <span class="form-error">
          Yo, you had better fill this out, it's required.
        </span>
      </label>
    </div>
      <div class="cell medium-12">
        <label>Item Description
          <textarea placeholder="Describe stuff"></textarea>
          <span class="form-error">
            Yo, you had better fill this out, it's required.
          </span>
        </label>
      </div>
      <div class="cell medium-12">
        <label for="exampleFileUpload" class="button">Upload File</label>
        <input type="file" id="exampleFileUpload" class="show-for-sr">
      </div>
      <div class="grid-x grid-margin-x">
        <fieldset class="cell medium-12">
          <legend>Silent or Live Auction</legend>
          <input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Silent</label>
          <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Live</label>
        </fieldset>
      </div>
  </div>
  <div class="grid-x grid-margin-x">
    <fieldset class="cell medium-12">
      <button class="button float-left" type="submit" value="Submit">Submit</button>
    </fieldset>
  </div>

</form>

</div>
</template>

<scripts>

</scripts>
<styles scoped>

</styles>
<!-- <script src="assets/js/app.js"></script>
</body>
</html> -->

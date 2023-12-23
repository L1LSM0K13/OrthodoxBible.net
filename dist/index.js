'use strict'

// Toggling Parallel Bible
document.getElementById('parallelBtn').addEventListener('click', function() {
  const mainText = document.getElementById('mainText');
  const parallelText = document.getElementById('parallelText');

  if (!mainText.classList.contains('col-span-2') && !parallelText.classList.contains('hidden')) {
    mainText.classList.add('col-span-2');
    parallelText.classList.add('hidden');

    mainText.classList.add('xl:mx-52', 'lg:mx-40', 'md:mx-28', 'sm:mx-12');
    mainText.classList.remove('xl:ml-52', 'lg:ml-40', 'md:ml-28', 'sm:ml-12');

    parallelText.classList.add('xl:mx-52', 'lg:mx-40', 'md:mx-28', 'sm:mx-12');
    parallelText.classList.remove('xl:mr-52', 'lg:mr-40', 'md:mr-28', 'sm:mr-12');
  } else {
    mainText.classList.remove('col-span-2');
    parallelText.classList.remove('hidden');

    mainText.classList.remove('xl:mx-52', 'lg:mx-40', 'md:mx-28', 'sm:mx-12');
    mainText.classList.add('xl:ml-52', 'lg:ml-40', 'md:ml-28', 'sm:ml-12');

    parallelText.classList.remove('xl:mx-52', 'lg:mx-40', 'md:mx-28', 'sm:mx-12');
    parallelText.classList.add('xl:mr-52', 'lg:mr-40', 'md:mr-28', 'sm:mr-12');
  }
})

// OLD, THIS IS FROM PARALLEL BRANCH

// document.getElementById('parallelBtn').addEventListener('click', function() {
//   let scriptureBlock = document.getElementById('parallelToggle');
//   let mainScripture = document.getElementById('mainScripture');
//   let parallelScripture = document.getElementById('parallelScripture')

//   if (scriptureBlock.classList.contains('grid-cols-2')) {
//     scriptureBlock.classList.remove('grid-cols-2');
//   } else {
//     scriptureBlock.classList.add('grid-cols-2');
//   };

//   if(parallelScripture.classList.contains('hidden')) {
//     parallelScripture.classList.remove('hidden');
//   } else {
//     parallelScripture.classList.add('hidden');
//   }
//   // FIX THIS ASAP
//   if(mainScripture.classList.contains('xl:mx-52', 'lg:mx-40', 'md:mx-28', 'sm:mx-12')) {
//     mainScripture.classList.add('xl:mr-0', 'lg:mr-0', 'md:mr-0', 'sm:mr-0');
//   } else if (mainScripture.classList.contains('xl:mx-52', 'lg:mx-40', 'md:mx-28', 'sm:mx-12')) {
//     mainScripture.classList.remove('xl:mr-0', 'lg:mr-0', 'md:mr-0', 'sm:mr-0')
//   }
// })

// OLD, THIS IS FROM MASTER BRANCH

// document.getElementById('parallelBtn').addEventListener('click', function() {
//   let parallelBlock = document.getElementById('parallelBlock');
//   let mainScripture = document.getElementById('mainScripture');

//   if (parallelBlock.classList.contains('hidden')) {
//     parallelBlock.classList.remove('hidden');
//     parallelBlock.classList.add('grid', 'grid-cols-2');
//   } else {
//     parallelBlock.classList.add('hidden');
//     parallelBlock.classList.remove('grid', 'grid-cols-2')
//   }
// });

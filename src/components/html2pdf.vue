<script setup></script>
<template>
  <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 h-full mt-10 mx-auto border">
    <div class="mx-auto">
      <img class="w-full mx-auto" src="../assets/html2pdf.png" alt="" />
      <div class="px-6 py-4 w-full">
        <h1 class="text-6xl mb-2 text-center">HTML to PDF Parser</h1>
        <h1 class="text-2xl italic font-semibold mb-5 text-center">
          17 mei 2022
        </h1>
        <h1 class="font-bold text-lg mb-2">Introductie</h1>
        <p class="mb-2">
          Na mijn licentie manager heeft mijn baas mij een nieuwe opdracht
          gegeven. Elke gebruiker volgt een x aantal cursussen, ik moest een
          tool maken die een link stuurt naar alle gebruikers met alle cursussen
          die ze gevolgd hebben, daarbij moeten ze een handtekeningen zetten bij
          elke cursus. Als dat gedaan is worden die handtekeningen opgeslagen
          als een pdf bestand op de server. Elke user krijgt een link opgestuurd
          naar zijn email waarbij de user een handtekening kan zetten. De link
          die wordt gestuurd is uniek geencrypteerd voor elke user en kan
          geopend worden met een bepaalde code.
        </p>
        <h1 class="font-bold text-lg mb-2">Uitwerking</h1>
        <p class="mb-2">
          Eerst heb ik lang gezocht naar een tool die handtekeningen laat zetten
          op een pdf file en het dan doorstuurt, maar helaas niks gevonden. Ik
          heb besloten om het zelf te maken in Vue en Laravel. Er is een library
          die html omzet in pdf, een soort van screenshot wordt gemaakt. Zo
          kunnen users hun handtekeningen in de database worden opgeslagen plus
          als pdf. Elke user krijgt een uniek link dat geecnrypteerd is aan de
          hand van hun email. De encryptie gebeurt aan de hand van aes-256-cbc
          algoritme. Daarna decrypteer ik het aan de hand van een unieke
          sleutel.
        </p>
        <h1 class="font-bold text-lg mb-2">Resultaat</h1>
        <p class="mb-5">
          Mijn baas was weer tevreden met mijn werk, en ik heb mij Vue skills
          verbeterd.
        </p>
        <a
          class="underline decoration-pink-500 italic font-bold"
          href="https://www.linkedin.com/in/maksym-kalinchyk/"
          >Maksym Kalinchyk - 17/05/2022</a
        >
      </div>
    </div>
  </div>
</template>

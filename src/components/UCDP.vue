<script setup></script>
<template>
  <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 h-full mt-10 mx-auto border">
    <div class="mx-auto">
      <img class="w-full mx-auto" src="../assets/pump.jpg" alt="" />
      <div class="px-6 py-4 w-full">
        <h1 class="text-6xl mb-2 text-center">Pump & Dump Bot</h1>
        <h1 class="text-2xl italic font-semibold mb-5 text-center">
          13 februari 2022
        </h1>
        <h1 class="font-bold text-lg mb-2">Introductie</h1>
        <p class="mb-2">
          Als UCDP opdracht heb ik besloten om een Pump & Dump Bot te maken die
          aan de hand van een Discord bericht een bepaalde Crypto coin koopt en
          hem daarna verkoopt met een bepaalde winst voor hij terug naar beneden
          daalt. De Discord server die het bericht stuurt heeft meer dan 50.000
          leden, zo wordt een coin "gemanipuleerd". Hoe later je koopt hoe
          minder de kans op winst, daarom zou het handig zijn moest een bot dat
          voor mij doen. Dit heb ik gedaan omdat ik zelf interesse heb in Crypto
          en omdat ik nog nooit een Discord bot gemaakt heb dus het was twee
          vliegen in 1 klap.
        </p>
        <h1 class="font-bold text-lg mb-2">Uitwerking</h1>
        <p class="mb-2">
          Ik mijn project gemaakt in NodeJs door gebruikt te maken van 2
          libraries: DiscordJS en Node-Binance-API. Eerst en vooral heb ik een
          bot account aangemaakt op Discord waarmee ik berichten kon
          onderscheppen en verwerken, zo kon in snel achterhalen welke coin er
          gepumpt werd. Daarna was het tijd om de binance api te onderzoeken,
          eerst de basis functies zoals kopen en verkopen en daarna stoplosses,
          zodat mijn coin automatisch verkoopt met minimaal verlies moest er
          iets mis gaan.
        </p>
        <h1 class="font-bold text-lg mb-2">Resultaat</h1>
        <p class="mb-5">
          Uiteindelijk is het mij gelukt om alles aan de praat te krijgen,
          helaas was de pump en dump hype al uitgestorven tegen dat mijn
          programma klaar was, maar moest het ooit eens terugkomen sta ik altijd
          paraat.
        </p>
        <a
          class="underline decoration-pink-500 italic font-bold"
          href="https://www.linkedin.com/in/maksym-kalinchyk/"
          >Maksym Kalinchyk - 13/03/2022</a
        >
      </div>
    </div>
  </div>
</template>

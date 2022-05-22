<script setup></script>

<template>
  <aside class="lg:w-64 absolute sm:invisible" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
        <li>
          <p
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-semibold">Maksym Kalinchyk</span>
          </p>
        </li>
        <li>
          <img class="rounded-full" src="../assets/linked_in.jpg" alt="" />
        </li>
        <li>
          <p
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Student 3de jaar Software Engineer @ Howest Brugge
          </p>
        </li>
        <li>
          <p
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            14/05/2022
          </p>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </aside>
  <div class="mx-auto lg:w-1/2 md:w-1/2 sm:w-1/2 h-full">
    <div class="rounded mt-5">
      <h1 class="text-lg text-center font-bold text-xl">Events</h1>
      <div class="flex lg:flex-row md:flex-col sm:flex-col mt-5 h-full">
        <router-link to="/blingathon">
          <div class="card mx-3 h-full">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="object-contain h-48 w-full"
                src="../assets/blingathon_logo.png"
                alt="Blingathon"
              />
              <div class="px-6 py-4 h-full">
                <div class="font-bold text-xl mb-2">Blingathon</div>
                <p class="text-lg font-semibold italic">13 november 2021</p>
                <p class="text-gray-700 text-base">
                  Op 13 november 2021 heb ik voor het eerst meegedaan aan een
                  Hackathon. Helaas door het Coronavirus...
                </p>
              </div>

              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#hackathon</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#blockchain</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#security</span
                >
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/hack-the-future">
          <div class="card mx-3 h-full">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="object-contain h-48 w-96"
                src="../assets/hack_the_future_logo.png"
                alt="Hack The Future"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Hack The Future</div>
                <p class="text-lg font-semibold italic">2 december 2021</p>
                <p class="text-gray-700 text-base">
                  Als mijn tweede Hackathon had ik zin om te programmeren in
                  plaats van Blockchain, daarom heb ik gekozen...
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#hackathon</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#programming</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#java</span
                >
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/cybersec">
          <div class="card mx-3 h-full">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="object-contain h-48 w-96"
                src="../assets/cybersec_logo.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Cybersec Europe</div>
                <p class="text-lg font-semibold italic">11 may 2022</p>
                <p class="text-gray-700 text-base">
                  Ik heb al aan 2 Hackathons meegedaan, een programmeer
                  hackathon en een blockchain hackathon, ...
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#convention</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#cybersecurity</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#event</span
                >
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="rounded mt-5">
      <h1 class="text-lg text-center font-bold text-xl">Projects</h1>
      <div class="flex lg:flex-row md:flex-col sm:flex-col mt-5">
        <router-link to="/ucdp">
          <div class="card mx-3 mb-5">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="object-contain h-48 w-96"
                src="../assets/pump.jpeg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Pump & Dump Bot</div>
                <p class="text-gray-700 text-base">
                  Als UCDP opdracht heb ik besloten om een Pump & Dump Bot te
                  maken die aan de hand van een Discord bericht...
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#discord</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#crypto</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#bot</span
                >
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="license-manager">
          <div class="card mx-3 mb-5">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="object-contain h-48 w-96"
                src="../assets/file.png"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">License Manager</div>
                <p class="text-gray-700 text-base">
                  Als opdracht op mijn stage moest ik een license manager maken,
                  een tool die allerlei licensties bijhoudt...
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#laravel</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#vuejs</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#stage</span
                >
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="html2pdf">
          <div class="card mx-3 mb-5">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="object-contain h-48 w-96"
                src="../assets/pdf.png"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">HTML to PDF</div>
                <p class="text-gray-700 text-base">
                  Na mijn licentie manager heeft mijn baas mij een nieuwe
                  opdracht gegeven. Elke gebruiker volgt een x aantal...
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#aravel</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#sueJS</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#stage</span
                >
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="rounded mt-5">
      <h1 class="text-lg text-center font-bold text-xl">Skills</h1>
      <div class="flex lg:flex-row md:flex-col sm:flex-col mt-5">
        <div class="card mx-3 mb-5">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="object-contain h-48 w-96"
              src="../assets/vuejs.png"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">VueJS</div>
              <p class="text-gray-700 text-base">
                Op mijn stage heb ik VueJS geleerd, nu kan veel gemakkelijker
                frameworks zoals React masteren.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#framework</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#vuejs</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#react</span
              >
            </div>
          </div>
        </div>
        <div class="card mx-3 mb-5">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="object-contain h-48 w-96"
              src="../assets/tailwind.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Tailwind</div>
              <p class="text-gray-700 text-base">
                Tailwind heb ik gebruikt om deze website te maken en om vele
                andere projecten te maken.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#tailwind</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#css</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#webdesign</span
              >
            </div>
          </div>
        </div>
        <div class="card mx-3 mb-5">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="object-contain h-48 w-96"
              src="../assets/laravel.png"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Laravel</div>
              <p class="text-gray-700 text-base">
                Door mijn stage heb ik zeer veel projecten geprogrammeerd in
                Laravel, nu is dat mijn framework geworden.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#backend</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#php</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#stage</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rounded mt-5">
      <h1 class="text-lg text-center font-bold text-xl">About me</h1>
      <div class="flex lg:flex-row md:flex-col sm:flex-col mt-5">
        <router-link to="Cv">
          <div class="card mx-3">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="object-contain h-48 w-96"
                src="../assets/cv.png"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Curriculum vitae</div>
                <p class="text-black-700 text-base font-semibold">Go to CV</p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#curriculum_vitae</span
                >
              </div>
            </div>
          </div>
        </router-link>
        <div class="card mx-3">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="object-contain h-48 w-96"
              src="../assets/linked.png"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">LinkedIn</div>
              <p class="text-black-700 text-base">
                <a
                  class="font-semibold"
                  href="https://www.linkedin.com/in/maksym-kalinchyk/"
                  >Follow</a
                >
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"
                >#linkedin</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"
                >#follow</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

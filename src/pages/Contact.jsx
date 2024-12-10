export default function Contact() {
    const features = [
      {
        title: "Services Client",
        description:
          "Un service client à votre écoute, disponible pour répondre à vos questions et vous accompagner dans chaque étape de votre expérience.",
        end: "(+229) 99 99 99 99",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-10 w-10 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
        ),
      },
      {
        title: "FAQ",
        description:
          "Retrouvez toutes les réponses à vos questions dans notre section dédiée ou rejoignez notre communauté en ligne pour partager vos expériences et astuces.",
        end: "",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-10 w-10 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        ),
      },
      {
        title: "Contactez Nous",
        description:
          "Restez connectés avec nous ! Contactez-nous par email ou via nos réseaux sociaux pour une assistance rapide et personnalisée.",
        end: "serviceclient@cgbe.bj",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-10 w-10 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        ),
      },
    ];
  
    return (
      <div className="text-center">
        <h1 className="text-4xl font-light text-gray-700 mb-12 mt-12">
          Une question, une idée ? Nous sommes là pour vous accompagner dans votre aventure de tontine en ligne !
        </h1>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="flex flex-row space-x-6">
            {features.map((feature, index) => (
              <div key={index} className="flex-1.5 text-center">
                <div className="flex flex-col items-center">
                  {feature.icon}
                  <dt className="mt-4 text-base font-semibold text-blue-700">{feature.title}</dt>
                  <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                  {feature.end && (
                    <dd className="text-blue-700 mt-5 font-semibold">{feature.end}</dd>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }
  
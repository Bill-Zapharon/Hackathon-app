const stats = [
    { name: 'Nous offrons une plateforme en ligne innovante et sécurisée qui repose sur la mise en commun des cotisations de ses membres, qui s’entraident financièrement en fonction de leurs besoins.', value: 'Que faisons nous' },
    { name: "La tontine en ligne permet aux utilisateurs de gérer leurs contributions, de suivre l’évolution de leurs fonds et de profiter des avantages de la tontine, le tout dans un cadre transparent et flexible. Grâce à notre application, ils peuvent accomplir toutes ces démarches de n'importe où, à tout moment, renforçant ainsi la solidarité financière et facilitant l’accès aux services financiers, sans aucun contact physique.", 
        value: "C'est quoi le principe de la tontine en ligne" },
  ]
  
export default function About(){
    return(
        <div className="text-center">
            <h1 className="lg:text-4xl font-light text-gray-700 mb-12 mt-12 text-lg sm:text-xl md:text-2xl">
            Notre mission : Révolutionner la tontine grâce à une plateforme en ligne accessible, transparente et sécurisée. 
            Découvrez comment nous transformons l&#39;épargne, pour un avenir plus prospère.
            </h1>
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 py-5 sm:py-5">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="space-y-8">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-white p-6 rounded-lg w-full mx-auto ">
                    <div className="flex flex-col md:flex-row items-center space-x-4 w-full"> 
                        <dd className="text-lg lg:text-4xl font-semibold tracking-tight mt-2 w-full ">{stat.value}</dd>
                        <dt className="text-lg lg:text-1xl text-white w-full">{stat.name}</dt>
                    </div>
                </div>
            ))}
        </dl>
    </div>
</div>





        </div>
    );
}












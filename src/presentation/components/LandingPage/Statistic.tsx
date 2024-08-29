import React from 'react';

const stats = [
    { 
      id: 1, 
      name: 'Número de animais abandonados ou resgatados por maus-tratos sob a tutela de Organizações Não Governamentais (ONGs) e grupos de proteção animal, conforme divulgado pelo Instituto Pet Brasil em 2023.', 
      value: '184.960' 
    },
    { 
      id: 2, 
      name: 'Número de gatos em situação de rua em 2022, segundo a OMS. Estes animais enfrentam diariamente abandono, doenças físicas e mentais, fome e maus-tratos. Sem voz para se defender, eles dependem de iniciativas governamentais e ONGs dedicadas ao resgate, cuidado e adoção.', 
      value: '10 milhões' 
    },
    { 
      id: 3, 
      name: 'Número estimado de cães vivendo nas ruas em 2022, de acordo com a OMS. Esses cães estão sujeitos a condições adversas como abandono, doenças, fome e abusos. A falta de proteção torna vital as iniciativas de adoção.', 
      value: '20 milhões' 
    }
  ];
  
  
  const Statistic: React.FC = () => {
    return (
      <div className="bg-[var(--color-bg-highlight)] py-16 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">
              Estatísticas
            </h2>
            <p className="mt-4 text-lg font-bold text-[var(--color-text-gray)]">
              Conheça os dados importantes sobre o abandono e resgate de animais nos últimos anos.
            </p>
          </div>
  
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-[var(--color-text-gray)]">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>  
    )
  }
  
  export default Statistic;
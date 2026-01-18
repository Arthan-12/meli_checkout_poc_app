import { usePreference } from '@/contexts/preference';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

function Home() {
  const { preference } = usePreference();

  // Inicialize o Mercado Pago com seu Public Key
  const publicKey = 'APP_USR-1364aaa6-93ef-4539-a0b8-a83881863c95';
  initMercadoPago(publicKey);
  return (
    <div>
      <h1>Home Page</h1>
      {preference && (
        <>
          <h1>Botão de Pagamento</h1>
          <p>Clique no botão para realizar o pagamento.</p>
          {/* Renderize o botão de pagamento */}
          <div style={{ width: '300px' }}>
            <Wallet
              initialization={{
                preferenceId: preference.preferenceId,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

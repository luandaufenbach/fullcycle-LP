import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { company, gabriela } from '@/lib/constants';

export const alt = `${company.name}, consultoria ambiental de ${gabriela.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), 'src/assets/gabriela-gomes.png'));
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          padding: '0 80px',
          background: '#1e3b2f',
          color: '#f5f6f1',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            Licenciamento ambiental, CAR e restauração ecológica em Santa Catarina.
          </div>
          <div style={{ fontSize: 30, marginTop: 36, color: '#d9a92e' }}>
            {`${company.name} | ${gabriela.name}, bióloga`}
          </div>
        </div>
        <img src={photoSrc} width={340} height={340} alt="" style={{ borderRadius: 4 }} />
      </div>
    ),
    size,
  );
}

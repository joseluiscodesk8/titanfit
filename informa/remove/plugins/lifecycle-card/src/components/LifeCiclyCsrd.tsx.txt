// plugins/lifecycle-card/src/components/LifecycleCard.tsx
import { 
  InfoCard
} from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import { Chip } from '@material-ui/core';

export const LifecycleCard = () => {
  const { entity } = useEntity();

  
  // Extraer metadatos con valores por defecto
  const environment = entity.metadata.annotations?.['backstage.io/environment'] || 'unknown';
  const version = entity.metadata.annotations?.['backstage.io/version'] || 'unknown';
  const lifecycle = entity.spec?.lifecycle || entity.metadata.annotations?.['lifecycle'] || 'unknown';
  const releaseDate = entity.metadata.annotations?.['backstage.io/release-date'] || 'unknown';

  // Estilos condicionales basados en el entorno
  const getEnvironmentStyle = (env: string) => {
    switch (env.toLowerCase()) {
      case 'prod':
        return { backgroundColor: '#ff4444', color: 'white' };
      case 'staging':
        return { backgroundColor: '#ffbb33', color: 'black' };
      case 'dev':
        return { backgroundColor: '#00C851', color: 'white' };
      default:
        return { backgroundColor: '#6c757d', color: 'white' };
    }
  };

  return (
    <InfoCard title="Component Lifecycle" subheader="Current deployment information">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <strong>Environment:</strong>
          <Chip 
            label={environment.toUpperCase()} 
            style={getEnvironmentStyle(environment)}
            size="small"
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <strong>Lifecycle:</strong>
          <span>
            {String(lifecycle).charAt(0).toUpperCase() + String(lifecycle).slice(1)}
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <strong>Version:</strong>
          <Chip label={`v${version}`} variant="outlined" size="small" />
        </div>
        
        {releaseDate !== 'unknown' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <strong>Release Date:</strong>
            <span>{new Date(releaseDate).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </InfoCard>
  );
};
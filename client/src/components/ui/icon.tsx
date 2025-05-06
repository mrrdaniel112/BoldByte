import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { createContext, useContext, useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const IconContext = createContext<Record<string, React.ComponentType<LucideProps>>>({});

export function IconProvider({ children }: { children: React.ReactNode }) {
  const [icons, setIcons] = useState<Record<string, React.ComponentType<LucideProps>>>({});

  useEffect(() => {
    const loadInitialIcons = async () => {
      const iconMap: Record<string, React.ComponentType<LucideProps>> = {};
      await Promise.all(
        Object.keys(dynamicIconImports).map(async (icon) => {
          // Add vite-ignore to prevent warnings on dynamic imports
          const importedIcon = await import(/* @vite-ignore */ `lucide-react/dist/esm/icons/${icon}`);
          iconMap[icon] = importedIcon.default;
        })
      );
      setIcons(iconMap);
    };

    loadInitialIcons();
  }, []);

  return (
    <IconContext.Provider value={icons}>
      {children}
    </IconContext.Provider>
  );
}

export function Icon({ name, className, ...props }: IconProps) {
  const [IconComp, setIconComp] = useState<React.ComponentType<LucideProps> | null>(null);
  const icons = useContext(IconContext);

  useEffect(() => {
    const loadIcon = async () => {
      if (icons[name]) {
        setIconComp(() => icons[name]);
        return;
      }

      try {
        // Add vite-ignore to prevent warnings on dynamic imports
        const imported = await import(/* @vite-ignore */ `lucide-react/dist/esm/icons/${name}`);
        setIconComp(() => imported.default);
      } catch (error) {
        console.error(`Failed to load icon: ${name}`, error);
      }
    };

    loadIcon();
  }, [name, icons]);

  if (!IconComp) {
    return null;
  }

  return <IconComp className={cn("h-5 w-5", className)} {...props} />;
}

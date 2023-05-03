import { useEffect, useRef, useState } from "react";

export function useDynamicSVGImport(name: string) {
	const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
	const [loading, setLoading] = useState<boolean | null>(null);
	const [error, setError] = useState<Error>();

	useEffect(() => {
		const getIcon = async () => {
			try {
				setLoading(true);
				setError(undefined);
				ImportedIconRef.current = (await import(`@/assets/${name}.svg`)).default;
			} catch (error: any) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		getIcon();
	}, [name]);

	return { error, loading, SvgIcon: ImportedIconRef.current };
}

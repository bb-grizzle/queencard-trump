import exportAsImage from "@/util/exportAsImage";
import { useCallback, useContext } from "react";
import { HomeContext } from ".";

const useHomeDownload = () => {
	const { cardRef } = useContext(HomeContext);

	const onDownloadClick = useCallback(() => {
		if (!cardRef.current) return;
		exportAsImage(cardRef.current, "hello_queen");
	}, [cardRef.current]);

	return { cardRef, onDownloadClick };
};

export default useHomeDownload;

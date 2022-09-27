import * as React from "react";
import "./App.scss";

import { MarkerFileData } from "./DataTypes";
import RenderView from "./RenderView";

const TMP_DATA: MarkerFileData = {
	markers: [
		{
			label: "LACR" //first label
		},
		{
			label: "LLSK" //middle label with empty X Y Z R fields
		},
		{
			label: "RILCR" //last label
		}
	],
	frames: [
		{
			time: 0.00417,
			positions: [
				{ //LACR
					x: 0.04408,
					y: -1.36457,
					z: 1.35774
				},
				null, // LLSK
				{ //RILCR
					x: 0.32163,
					y: -1.3931,
					z: 0.99752
				}
			],
		}
	],
};

export default function App() {
	return <div id={"app-grid"}>
		<div id={"file-area"}>
			<div id={"marker-file"}>
				<input type={"button"} id={"marker-file-button"} className={"file-upload-button"} value={"Choose Marker Data File"} />
				<input type={"file"} id={"marker-file-upload"} hidden />
				<span id={"marker-file-name"}>Trial001_Markers.tsv</span>
			</div>
			<div id={"force-file"}>
				<input type={"button"} id={"force-file-button"} className={"file-upload-button"} value={"Choose Force Plate Data File"} />
				<input type={"file"} id={"force-file-upload"} hidden />
				<span id={"force-file-name"}>Trial001_Forces.tsv</span>
			</div>
		</div>
		{/*<div id={"file-name-area"}>*/}
		{/*	<div id={"marker-file-name"}>Trial001_Markers.tsv</div>*/}
		{/*	<div id={"force-file-name"}>Trial001_Forces.tsv</div>*/}
		{/*</div>*/}
		<div id={"logo"}>Movilo</div>
		<div id={"selection-info"}>
			Selection Info
		</div>
		<div id={"viz-area"}>
			<RenderView frame={0} data={TMP_DATA} />
		</div>
		<div id={"output-area"}>
			{`Label: LASIS
			x: 0.07062
			y: -1.31965
			z: 0.92865

			Label: LKJC
			x: 0.10328
			y: -1.47403
			z: 0.48009

			Label: LAJC
			x: 0.12071
			y: -1.59442
			z: 0.12018

			LKJC Angle: 178.6°`}
		</div>
	</div>;
}

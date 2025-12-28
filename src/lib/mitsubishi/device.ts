import type { MitsubishiController } from "./mitsubishiController";

interface Device {
	name: string;
	ip: string;
	mac: string | undefined;
	controller: MitsubishiController;
	pollingJob?: ioBroker.Interval | undefined;
}

export type { Device };

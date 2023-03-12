import CmsMedia from '../cmsMedia'
import CmsMediaData from '../cmsMediaData'

export default interface House {
	id: number
	thumbnail: CmsMedia
	briefDescription: string
	bedrooms: number
	wholeBathrooms: number
	halfBathrooms: number
	squareFeet: number
	photos: { data: Array<CmsMediaData> }
	detailedDescription: string
}

declare module RijksmuseumApi {

    export interface CountFacets {
        hasimage: number;
        ondisplay: number;
    }

    export interface Links {
        self: string;
        web: string;
    }

    export interface WebImage {
        guid: string;
        offsetPercentageX: number;
        offsetPercentageY: number;
        width: number;
        height: number;
        url: string;
    }

    export interface HeaderImage {
        guid: string;
        offsetPercentageX: number;
        offsetPercentageY: number;
        width: number;
        height: number;
        url: string;
    }

    export interface ArtObject {
        links: Links;
        id: string;
        objectNumber: string;
        title: string;
        hasImage: boolean;
        principalOrFirstMaker: string;
        longTitle: string;
        showImage: boolean;
        permitDownload: boolean;
        webImage: WebImage;
        headerImage: HeaderImage;
        productionPlaces: string[];
    }

    export interface Facet2 {
        key: string;
        value: number;
    }

    export interface Facet {
        facets: Facet2[];
        name: string;
        otherTerms: number;
        prettyName: number;
    }

    export interface ResponseList {
        elapsedMilliseconds: number;
        count: number;
        countFacets: CountFacets;
        artObjects: ArtObject[];
        facets: Facet[];
    }

    export interface Links {
        search: string;
    }

    export interface WebImage {
        guid: string;
        offsetPercentageX: number;
        offsetPercentageY: number;
        width: number;
        height: number;
        url: string;
    }

    export interface ColorsWithNormalization {
        originalHex: string;
        normalizedHex: string;
    }

    export interface PrincipalMaker {
        name: string;
        unFixedName: string;
        placeOfBirth: string;
        dateOfBirth: string;
        dateOfBirthPrecision?: any;
        dateOfDeath: string;
        dateOfDeathPrecision?: any;
        placeOfDeath: string;
        occupation: string[];
        roles: string[];
        nationality: string;
        biography?: any;
        productionPlaces: string[];
        qualification?: any;
    }

    export interface Acquisition {
        method?: any;
        date: Date;
        creditLine?: any;
    }

    export interface Dating {
        presentingDate: string;
        sortingDate: number;
        period: number;
        yearEarly: number;
        yearLate: number;
    }

    export interface Classification {
        iconClassIdentifier: string[];
        iconClassDescription: string[];
        motifs: any[];
        events: any[];
        periods: any[];
        places: any[];
        people: any[];
        objectNumbers: string[];
    }

    export interface Dimension {
        unit: string;
        type: string;
        part: string;
        value: string;
    }

    export interface Label {
        title: string;
        makerLine: string;
        description: string;
        notes?: any;
        date: string;
    }

    export interface ArtObjectDetails {
        links: Links;
        id: string;
        priref: string;
        objectNumber: string;
        language: string;
        title: string;
        copyrightHolder?: any;
        webImage: WebImage;
        colors: string[];
        colorsWithNormalization: ColorsWithNormalization[];
        normalizedColors: string[];
        normalized32Colors: any[];
        titles: string[];
        description: string;
        labelText?: any;
        objectTypes: string[];
        objectCollection: string[];
        makers: any[];
        principalMakers: PrincipalMaker[];
        plaqueDescriptionDutch: string;
        plaqueDescriptionEnglish: string;
        principalMaker: string;
        artistRole?: any;
        associations: any[];
        acquisition: Acquisition;
        exhibitions: any[];
        materials: string[];
        techniques: any[];
        productionPlaces: string[];
        dating: Dating;
        classification: Classification;
        hasImage: boolean;
        historicalPersons: any[];
        inscriptions: any[];
        documentation: string[];
        catRefRPK: any[];
        principalOrFirstMaker: string;
        dimensions: Dimension[];
        physicalProperties: any[];
        physicalMedium: string;
        longTitle: string;
        subTitle: string;
        scLabelLine: string;
        label: Label;
        showImage: boolean;
        location: string;
    }

    export interface AdlibOverrides {
        titel?: any;
        maker?: any;
        etiketText?: any;
    }

    export interface ArtObjectPage {
        id: string;
        similarPages: any[];
        lang: string;
        objectNumber: string;
        tags: any[];
        plaqueDescription: string;
        audioFile1?: any;
        audioFileLabel1?: any;
        audioFileLabel2?: any;
        createdOn: Date;
        updatedOn: Date;
        adlibOverrides: AdlibOverrides;
    }

    export interface ResponseDetails {
        elapsedMilliseconds: number;
        artObject: ArtObjectDetails;
        artObjectPage: ArtObjectPage;
    }

    

}
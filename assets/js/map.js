let visitPoints = [
    {
        id: 1,
        name: 'Punto 1',
        coords: {
            lat: -35.03338665111035,
            lng: -63.014918537444906,
        },
        link: 'actores.html'
    },
    {
        id: 2,
        name: 'Punto 2',
        coords: {
            lat: -35.0334529862711,
            lng: -63.01773375255708,
        },
        link: 'albarato.html'
    },
    {
        id: 3,
        name: 'Punto 3',
        coords: {
            lat: -35.03187751165699,
            lng: -63.019191993478486,
        },
        link: 'espejismo-de-amor.html'
    }
]

window.initMap = function () {

    const mapContainer = document.querySelector('#map')
    const coords = { lat: -35.03338665111035, lng: -63.014918537444906 }
    const map = new google.maps.Map(mapContainer, {
        zoom: 16,
        center: coords,
        styles: [
            {
                featureType: 'poi',
                stylers: [{ visibility: 'off' }]
            }
        ]
    })

    let tooltip = new google.maps.InfoWindow()

    const addMarker = (visitPoints) => {
        visitPoints.forEach(point => {

            const infoTooltipo = createTooltip(point)

            const marker = new google.maps.Marker({
                position: point?.coords,
                map,
            })

            google.maps.event.addListener(marker, 'click', () => {
                tooltip.setContent(infoTooltipo)
                tooltip.open(map, marker)
                map.setCenter(point.coords)
                map.setZoom(16)
            })
        })
    }

    addMarker(visitPoints)
}

const createTooltip = (point) => {
    return `
    <div class="map-tooltip-container">
        <h3 class="map-tooltip-title">${point?.name}</h3>
        <a href="${point?.link}" class="map-tooltip-link" target="_blank">Visitar</a>
    </div>
    `
}
